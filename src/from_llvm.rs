pub use crate::iterators::*;
pub use llvm_sys::core::*;
pub use llvm_sys::prelude::*;
use std::ffi::CStr;
use std::os::raw::c_char;

// We convert all LLVM strings to owned Strings (which involves a copy)
// partly because we intend to serialize/deserialize our ASTs eventually
pub unsafe fn raw_to_string(raw: *const c_char) -> String {
    let cstr = CStr::from_ptr(raw);
    cstr.to_str().expect("Failed to convert CStr").to_owned()
}

macro_rules! wrap {
    ($llvmFunc:ident, $argty:ty, $wrapperFunc:ident) => {
        pub unsafe fn $wrapperFunc(arg: $argty) -> String {
            let ptr = $llvmFunc(arg);
            raw_to_string(ptr)
        }
    };
}

macro_rules! wrap_maybe_null {
    ($llvmFunc: ident, $argty:ty, $wrapperFunc:ident) => {
        pub unsafe fn $wrapperFunc(arg: $argty) -> Option<String> {
            let ptr = $llvmFunc(arg);
            if ptr.is_null() {
                None
            } else {
                Some(raw_to_string(ptr))
            }
        }
    };
}

macro_rules! wrap_with_len {
    ($llvmFunc:ident, $argty:ty, $wrapperFunc:ident) => {
        pub unsafe fn $wrapperFunc(arg: $argty) -> String {
            let mut len = 0;
            let ptr = $llvmFunc(arg, &mut len);
            raw_to_string(ptr)
        }
    };
}

wrap_with_len!(LLVMGetModuleInlineAsm, LLVMModuleRef, get_module_inline_asm);
wrap_with_len!(LLVMGetModuleIdentifier, LLVMModuleRef, get_module_identifier);
wrap_with_len!(LLVMGetSourceFileName, LLVMModuleRef, get_source_file_name);
wrap!(LLVMGetDataLayoutStr, LLVMModuleRef, get_data_layout_str);
wrap_maybe_null!(LLVMGetTarget, LLVMModuleRef, get_target);
wrap_with_len!(LLVMGetValueName2, LLVMValueRef, get_value_name);
wrap_maybe_null!(LLVMGetStructName, LLVMTypeRef, get_struct_name);
wrap_maybe_null!(LLVMGetSection, LLVMValueRef, get_section);
wrap_maybe_null!(LLVMGetGC, LLVMValueRef, get_gc);
wrap!(LLVMGetBasicBlockName, LLVMBasicBlockRef, get_bb_name);
wrap_with_len!(LLVMGetMDString, LLVMValueRef, get_md_string);
wrap!(LLVMPrintValueToString, LLVMValueRef, print_to_string);
// wrap!(LLVMPrintTypeToString, LLVMTypeRef, print_type_to_string);
wrap_with_len!(LLVMGetStringAttributeKind, LLVMAttributeRef, get_string_attribute_kind);
wrap_with_len!(LLVMGetStringAttributeValue, LLVMAttributeRef, get_string_attribute_value);
wrap_with_len!(LLVMGetNamedMetadataName, LLVMNamedMDNodeRef, get_namedmetadata_name);

// Panics if the LLVMValueRef is not a basic block
pub unsafe fn op_to_bb(op: LLVMValueRef) -> LLVMBasicBlockRef {
    assert!(LLVMValueIsBasicBlock(op) != 0);
    LLVMValueAsBasicBlock(op)
}

/// LLVM Context wrapper that frees the underlying context when the wrapper is dropped
pub struct Context {
    pub ctx: LLVMContextRef,
}

impl Context {
    pub fn new() -> Self {
        Self {
            ctx: unsafe { LLVMContextCreate() },
        }
    }
}

impl Drop for Context {
    fn drop(&mut self) {
        unsafe {
            LLVMContextDispose(self.ctx);
        }
    }
}

/// Safe wrapper for an array of `LLVMValueMetadataEntry`, which properly disposes the array when the wrapper is dropped
pub struct LLVMGlobalMetadataArray {
    array: *mut LLVMValueMetadataEntry,
    len: usize,
}

impl Drop for LLVMGlobalMetadataArray {
    fn drop(&mut self) {
        unsafe { LLVMDisposeValueMetadataEntries(self.array) };
    }
}

pub unsafe fn get_raw_metadata_of_globalvar_or_func(v: LLVMValueRef) -> LLVMGlobalMetadataArray {
    let mut len = 0;
    let mut array = LLVMGlobalCopyAllMetadata(v, &mut len);
    LLVMGlobalMetadataArray {
        array,
        len,
    }
}

pub type ValueMetadataKind = u32;

pub unsafe fn get_metadata_of_globalvar_or_func(v: LLVMValueRef) -> Vec<(ValueMetadataKind, LLVMMetadataRef)> {
    let array = get_raw_metadata_of_globalvar_or_func(v);
    (0 .. array.len as u32).map(|i| {
        let kind = LLVMValueMetadataEntriesGetKind(array.array, i);
        let mref = LLVMValueMetadataEntriesGetMetadata(array.array, i);
        (kind, mref)
    }).collect()
}
