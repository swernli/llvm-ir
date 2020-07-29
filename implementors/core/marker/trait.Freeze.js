(function() {var implementors = {};
implementors["llvm_ir"] = [{"text":"impl Freeze for <a class=\"struct\" href=\"llvm_ir/basicblock/struct.BasicBlock.html\" title=\"struct llvm_ir::basicblock::BasicBlock\">BasicBlock</a>","synthetic":true,"types":["llvm_ir::basicblock::BasicBlock"]},{"text":"impl Freeze for <a class=\"struct\" href=\"llvm_ir/constant/struct.Add.html\" title=\"struct llvm_ir::constant::Add\">Add</a>","synthetic":true,"types":["llvm_ir::constant::Add"]},{"text":"impl Freeze for <a class=\"struct\" href=\"llvm_ir/constant/struct.Sub.html\" title=\"struct llvm_ir::constant::Sub\">Sub</a>","synthetic":true,"types":["llvm_ir::constant::Sub"]},{"text":"impl Freeze for <a class=\"struct\" href=\"llvm_ir/constant/struct.Mul.html\" title=\"struct llvm_ir::constant::Mul\">Mul</a>","synthetic":true,"types":["llvm_ir::constant::Mul"]},{"text":"impl Freeze for <a class=\"struct\" href=\"llvm_ir/constant/struct.UDiv.html\" title=\"struct llvm_ir::constant::UDiv\">UDiv</a>","synthetic":true,"types":["llvm_ir::constant::UDiv"]},{"text":"impl Freeze for <a class=\"struct\" href=\"llvm_ir/constant/struct.SDiv.html\" title=\"struct llvm_ir::constant::SDiv\">SDiv</a>","synthetic":true,"types":["llvm_ir::constant::SDiv"]},{"text":"impl Freeze for <a class=\"struct\" href=\"llvm_ir/constant/struct.URem.html\" title=\"struct llvm_ir::constant::URem\">URem</a>","synthetic":true,"types":["llvm_ir::constant::URem"]},{"text":"impl Freeze for <a class=\"struct\" href=\"llvm_ir/constant/struct.SRem.html\" title=\"struct llvm_ir::constant::SRem\">SRem</a>","synthetic":true,"types":["llvm_ir::constant::SRem"]},{"text":"impl Freeze for <a class=\"struct\" href=\"llvm_ir/constant/struct.And.html\" title=\"struct llvm_ir::constant::And\">And</a>","synthetic":true,"types":["llvm_ir::constant::And"]},{"text":"impl Freeze for <a class=\"struct\" href=\"llvm_ir/constant/struct.Or.html\" title=\"struct llvm_ir::constant::Or\">Or</a>","synthetic":true,"types":["llvm_ir::constant::Or"]},{"text":"impl Freeze for <a class=\"struct\" href=\"llvm_ir/constant/struct.Xor.html\" title=\"struct llvm_ir::constant::Xor\">Xor</a>","synthetic":true,"types":["llvm_ir::constant::Xor"]},{"text":"impl Freeze for <a class=\"struct\" href=\"llvm_ir/constant/struct.Shl.html\" title=\"struct llvm_ir::constant::Shl\">Shl</a>","synthetic":true,"types":["llvm_ir::constant::Shl"]},{"text":"impl Freeze for <a class=\"struct\" href=\"llvm_ir/constant/struct.LShr.html\" title=\"struct llvm_ir::constant::LShr\">LShr</a>","synthetic":true,"types":["llvm_ir::constant::LShr"]},{"text":"impl Freeze for <a class=\"struct\" href=\"llvm_ir/constant/struct.AShr.html\" title=\"struct llvm_ir::constant::AShr\">AShr</a>","synthetic":true,"types":["llvm_ir::constant::AShr"]},{"text":"impl Freeze for <a class=\"struct\" href=\"llvm_ir/constant/struct.FAdd.html\" title=\"struct llvm_ir::constant::FAdd\">FAdd</a>","synthetic":true,"types":["llvm_ir::constant::FAdd"]},{"text":"impl Freeze for <a class=\"struct\" href=\"llvm_ir/constant/struct.FSub.html\" title=\"struct llvm_ir::constant::FSub\">FSub</a>","synthetic":true,"types":["llvm_ir::constant::FSub"]},{"text":"impl Freeze for <a class=\"struct\" href=\"llvm_ir/constant/struct.FMul.html\" title=\"struct llvm_ir::constant::FMul\">FMul</a>","synthetic":true,"types":["llvm_ir::constant::FMul"]},{"text":"impl Freeze for <a class=\"struct\" href=\"llvm_ir/constant/struct.FDiv.html\" title=\"struct llvm_ir::constant::FDiv\">FDiv</a>","synthetic":true,"types":["llvm_ir::constant::FDiv"]},{"text":"impl Freeze for <a class=\"struct\" href=\"llvm_ir/constant/struct.FRem.html\" title=\"struct llvm_ir::constant::FRem\">FRem</a>","synthetic":true,"types":["llvm_ir::constant::FRem"]},{"text":"impl Freeze for <a class=\"struct\" href=\"llvm_ir/constant/struct.ExtractElement.html\" title=\"struct llvm_ir::constant::ExtractElement\">ExtractElement</a>","synthetic":true,"types":["llvm_ir::constant::ExtractElement"]},{"text":"impl Freeze for <a class=\"struct\" href=\"llvm_ir/constant/struct.InsertElement.html\" title=\"struct llvm_ir::constant::InsertElement\">InsertElement</a>","synthetic":true,"types":["llvm_ir::constant::InsertElement"]},{"text":"impl Freeze for <a class=\"struct\" href=\"llvm_ir/constant/struct.ShuffleVector.html\" title=\"struct llvm_ir::constant::ShuffleVector\">ShuffleVector</a>","synthetic":true,"types":["llvm_ir::constant::ShuffleVector"]},{"text":"impl Freeze for <a class=\"struct\" href=\"llvm_ir/constant/struct.ExtractValue.html\" title=\"struct llvm_ir::constant::ExtractValue\">ExtractValue</a>","synthetic":true,"types":["llvm_ir::constant::ExtractValue"]},{"text":"impl Freeze for <a class=\"struct\" href=\"llvm_ir/constant/struct.InsertValue.html\" title=\"struct llvm_ir::constant::InsertValue\">InsertValue</a>","synthetic":true,"types":["llvm_ir::constant::InsertValue"]},{"text":"impl Freeze for <a class=\"struct\" href=\"llvm_ir/constant/struct.GetElementPtr.html\" title=\"struct llvm_ir::constant::GetElementPtr\">GetElementPtr</a>","synthetic":true,"types":["llvm_ir::constant::GetElementPtr"]},{"text":"impl Freeze for <a class=\"struct\" href=\"llvm_ir/constant/struct.Trunc.html\" title=\"struct llvm_ir::constant::Trunc\">Trunc</a>","synthetic":true,"types":["llvm_ir::constant::Trunc"]},{"text":"impl Freeze for <a class=\"struct\" href=\"llvm_ir/constant/struct.ZExt.html\" title=\"struct llvm_ir::constant::ZExt\">ZExt</a>","synthetic":true,"types":["llvm_ir::constant::ZExt"]},{"text":"impl Freeze for <a class=\"struct\" href=\"llvm_ir/constant/struct.SExt.html\" title=\"struct llvm_ir::constant::SExt\">SExt</a>","synthetic":true,"types":["llvm_ir::constant::SExt"]},{"text":"impl Freeze for <a class=\"struct\" href=\"llvm_ir/constant/struct.FPTrunc.html\" title=\"struct llvm_ir::constant::FPTrunc\">FPTrunc</a>","synthetic":true,"types":["llvm_ir::constant::FPTrunc"]},{"text":"impl Freeze for <a class=\"struct\" href=\"llvm_ir/constant/struct.FPExt.html\" title=\"struct llvm_ir::constant::FPExt\">FPExt</a>","synthetic":true,"types":["llvm_ir::constant::FPExt"]},{"text":"impl Freeze for <a class=\"struct\" href=\"llvm_ir/constant/struct.FPToUI.html\" title=\"struct llvm_ir::constant::FPToUI\">FPToUI</a>","synthetic":true,"types":["llvm_ir::constant::FPToUI"]},{"text":"impl Freeze for <a class=\"struct\" href=\"llvm_ir/constant/struct.FPToSI.html\" title=\"struct llvm_ir::constant::FPToSI\">FPToSI</a>","synthetic":true,"types":["llvm_ir::constant::FPToSI"]},{"text":"impl Freeze for <a class=\"struct\" href=\"llvm_ir/constant/struct.UIToFP.html\" title=\"struct llvm_ir::constant::UIToFP\">UIToFP</a>","synthetic":true,"types":["llvm_ir::constant::UIToFP"]},{"text":"impl Freeze for <a class=\"struct\" href=\"llvm_ir/constant/struct.SIToFP.html\" title=\"struct llvm_ir::constant::SIToFP\">SIToFP</a>","synthetic":true,"types":["llvm_ir::constant::SIToFP"]},{"text":"impl Freeze for <a class=\"struct\" href=\"llvm_ir/constant/struct.PtrToInt.html\" title=\"struct llvm_ir::constant::PtrToInt\">PtrToInt</a>","synthetic":true,"types":["llvm_ir::constant::PtrToInt"]},{"text":"impl Freeze for <a class=\"struct\" href=\"llvm_ir/constant/struct.IntToPtr.html\" title=\"struct llvm_ir::constant::IntToPtr\">IntToPtr</a>","synthetic":true,"types":["llvm_ir::constant::IntToPtr"]},{"text":"impl Freeze for <a class=\"struct\" href=\"llvm_ir/constant/struct.BitCast.html\" title=\"struct llvm_ir::constant::BitCast\">BitCast</a>","synthetic":true,"types":["llvm_ir::constant::BitCast"]},{"text":"impl Freeze for <a class=\"struct\" href=\"llvm_ir/constant/struct.AddrSpaceCast.html\" title=\"struct llvm_ir::constant::AddrSpaceCast\">AddrSpaceCast</a>","synthetic":true,"types":["llvm_ir::constant::AddrSpaceCast"]},{"text":"impl Freeze for <a class=\"struct\" href=\"llvm_ir/constant/struct.ICmp.html\" title=\"struct llvm_ir::constant::ICmp\">ICmp</a>","synthetic":true,"types":["llvm_ir::constant::ICmp"]},{"text":"impl Freeze for <a class=\"struct\" href=\"llvm_ir/constant/struct.FCmp.html\" title=\"struct llvm_ir::constant::FCmp\">FCmp</a>","synthetic":true,"types":["llvm_ir::constant::FCmp"]},{"text":"impl Freeze for <a class=\"struct\" href=\"llvm_ir/constant/struct.Select.html\" title=\"struct llvm_ir::constant::Select\">Select</a>","synthetic":true,"types":["llvm_ir::constant::Select"]},{"text":"impl Freeze for <a class=\"enum\" href=\"llvm_ir/constant/enum.Constant.html\" title=\"enum llvm_ir::constant::Constant\">Constant</a>","synthetic":true,"types":["llvm_ir::constant::Constant"]},{"text":"impl Freeze for <a class=\"enum\" href=\"llvm_ir/constant/enum.Float.html\" title=\"enum llvm_ir::constant::Float\">Float</a>","synthetic":true,"types":["llvm_ir::constant::Float"]},{"text":"impl Freeze for <a class=\"struct\" href=\"llvm_ir/debugloc/struct.DebugLoc.html\" title=\"struct llvm_ir::debugloc::DebugLoc\">DebugLoc</a>","synthetic":true,"types":["llvm_ir::debugloc::DebugLoc"]},{"text":"impl Freeze for <a class=\"struct\" href=\"llvm_ir/function/struct.Function.html\" title=\"struct llvm_ir::function::Function\">Function</a>","synthetic":true,"types":["llvm_ir::function::Function"]},{"text":"impl Freeze for <a class=\"struct\" href=\"llvm_ir/function/struct.Parameter.html\" title=\"struct llvm_ir::function::Parameter\">Parameter</a>","synthetic":true,"types":["llvm_ir::function::Parameter"]},{"text":"impl Freeze for <a class=\"enum\" href=\"llvm_ir/function/enum.CallingConvention.html\" title=\"enum llvm_ir::function::CallingConvention\">CallingConvention</a>","synthetic":true,"types":["llvm_ir::function::CallingConvention"]},{"text":"impl Freeze for <a class=\"enum\" href=\"llvm_ir/function/enum.Attribute.html\" title=\"enum llvm_ir::function::Attribute\">Attribute</a>","synthetic":true,"types":["llvm_ir::function::Attribute"]},{"text":"impl Freeze for <a class=\"struct\" href=\"llvm_ir/instruction/struct.Add.html\" title=\"struct llvm_ir::instruction::Add\">Add</a>","synthetic":true,"types":["llvm_ir::instruction::Add"]},{"text":"impl Freeze for <a class=\"struct\" href=\"llvm_ir/instruction/struct.Sub.html\" title=\"struct llvm_ir::instruction::Sub\">Sub</a>","synthetic":true,"types":["llvm_ir::instruction::Sub"]},{"text":"impl Freeze for <a class=\"struct\" href=\"llvm_ir/instruction/struct.Mul.html\" title=\"struct llvm_ir::instruction::Mul\">Mul</a>","synthetic":true,"types":["llvm_ir::instruction::Mul"]},{"text":"impl Freeze for <a class=\"struct\" href=\"llvm_ir/instruction/struct.UDiv.html\" title=\"struct llvm_ir::instruction::UDiv\">UDiv</a>","synthetic":true,"types":["llvm_ir::instruction::UDiv"]},{"text":"impl Freeze for <a class=\"struct\" href=\"llvm_ir/instruction/struct.SDiv.html\" title=\"struct llvm_ir::instruction::SDiv\">SDiv</a>","synthetic":true,"types":["llvm_ir::instruction::SDiv"]},{"text":"impl Freeze for <a class=\"struct\" href=\"llvm_ir/instruction/struct.URem.html\" title=\"struct llvm_ir::instruction::URem\">URem</a>","synthetic":true,"types":["llvm_ir::instruction::URem"]},{"text":"impl Freeze for <a class=\"struct\" href=\"llvm_ir/instruction/struct.SRem.html\" title=\"struct llvm_ir::instruction::SRem\">SRem</a>","synthetic":true,"types":["llvm_ir::instruction::SRem"]},{"text":"impl Freeze for <a class=\"struct\" href=\"llvm_ir/instruction/struct.And.html\" title=\"struct llvm_ir::instruction::And\">And</a>","synthetic":true,"types":["llvm_ir::instruction::And"]},{"text":"impl Freeze for <a class=\"struct\" href=\"llvm_ir/instruction/struct.Or.html\" title=\"struct llvm_ir::instruction::Or\">Or</a>","synthetic":true,"types":["llvm_ir::instruction::Or"]},{"text":"impl Freeze for <a class=\"struct\" href=\"llvm_ir/instruction/struct.Xor.html\" title=\"struct llvm_ir::instruction::Xor\">Xor</a>","synthetic":true,"types":["llvm_ir::instruction::Xor"]},{"text":"impl Freeze for <a class=\"struct\" href=\"llvm_ir/instruction/struct.Shl.html\" title=\"struct llvm_ir::instruction::Shl\">Shl</a>","synthetic":true,"types":["llvm_ir::instruction::Shl"]},{"text":"impl Freeze for <a class=\"struct\" href=\"llvm_ir/instruction/struct.LShr.html\" title=\"struct llvm_ir::instruction::LShr\">LShr</a>","synthetic":true,"types":["llvm_ir::instruction::LShr"]},{"text":"impl Freeze for <a class=\"struct\" href=\"llvm_ir/instruction/struct.AShr.html\" title=\"struct llvm_ir::instruction::AShr\">AShr</a>","synthetic":true,"types":["llvm_ir::instruction::AShr"]},{"text":"impl Freeze for <a class=\"struct\" href=\"llvm_ir/instruction/struct.FAdd.html\" title=\"struct llvm_ir::instruction::FAdd\">FAdd</a>","synthetic":true,"types":["llvm_ir::instruction::FAdd"]},{"text":"impl Freeze for <a class=\"struct\" href=\"llvm_ir/instruction/struct.FSub.html\" title=\"struct llvm_ir::instruction::FSub\">FSub</a>","synthetic":true,"types":["llvm_ir::instruction::FSub"]},{"text":"impl Freeze for <a class=\"struct\" href=\"llvm_ir/instruction/struct.FMul.html\" title=\"struct llvm_ir::instruction::FMul\">FMul</a>","synthetic":true,"types":["llvm_ir::instruction::FMul"]},{"text":"impl Freeze for <a class=\"struct\" href=\"llvm_ir/instruction/struct.FDiv.html\" title=\"struct llvm_ir::instruction::FDiv\">FDiv</a>","synthetic":true,"types":["llvm_ir::instruction::FDiv"]},{"text":"impl Freeze for <a class=\"struct\" href=\"llvm_ir/instruction/struct.FRem.html\" title=\"struct llvm_ir::instruction::FRem\">FRem</a>","synthetic":true,"types":["llvm_ir::instruction::FRem"]},{"text":"impl Freeze for <a class=\"struct\" href=\"llvm_ir/instruction/struct.FNeg.html\" title=\"struct llvm_ir::instruction::FNeg\">FNeg</a>","synthetic":true,"types":["llvm_ir::instruction::FNeg"]},{"text":"impl Freeze for <a class=\"struct\" href=\"llvm_ir/instruction/struct.ExtractElement.html\" title=\"struct llvm_ir::instruction::ExtractElement\">ExtractElement</a>","synthetic":true,"types":["llvm_ir::instruction::ExtractElement"]},{"text":"impl Freeze for <a class=\"struct\" href=\"llvm_ir/instruction/struct.InsertElement.html\" title=\"struct llvm_ir::instruction::InsertElement\">InsertElement</a>","synthetic":true,"types":["llvm_ir::instruction::InsertElement"]},{"text":"impl Freeze for <a class=\"struct\" href=\"llvm_ir/instruction/struct.ShuffleVector.html\" title=\"struct llvm_ir::instruction::ShuffleVector\">ShuffleVector</a>","synthetic":true,"types":["llvm_ir::instruction::ShuffleVector"]},{"text":"impl Freeze for <a class=\"struct\" href=\"llvm_ir/instruction/struct.ExtractValue.html\" title=\"struct llvm_ir::instruction::ExtractValue\">ExtractValue</a>","synthetic":true,"types":["llvm_ir::instruction::ExtractValue"]},{"text":"impl Freeze for <a class=\"struct\" href=\"llvm_ir/instruction/struct.InsertValue.html\" title=\"struct llvm_ir::instruction::InsertValue\">InsertValue</a>","synthetic":true,"types":["llvm_ir::instruction::InsertValue"]},{"text":"impl Freeze for <a class=\"struct\" href=\"llvm_ir/instruction/struct.Alloca.html\" title=\"struct llvm_ir::instruction::Alloca\">Alloca</a>","synthetic":true,"types":["llvm_ir::instruction::Alloca"]},{"text":"impl Freeze for <a class=\"struct\" href=\"llvm_ir/instruction/struct.Load.html\" title=\"struct llvm_ir::instruction::Load\">Load</a>","synthetic":true,"types":["llvm_ir::instruction::Load"]},{"text":"impl Freeze for <a class=\"struct\" href=\"llvm_ir/instruction/struct.Store.html\" title=\"struct llvm_ir::instruction::Store\">Store</a>","synthetic":true,"types":["llvm_ir::instruction::Store"]},{"text":"impl Freeze for <a class=\"struct\" href=\"llvm_ir/instruction/struct.Fence.html\" title=\"struct llvm_ir::instruction::Fence\">Fence</a>","synthetic":true,"types":["llvm_ir::instruction::Fence"]},{"text":"impl Freeze for <a class=\"struct\" href=\"llvm_ir/instruction/struct.CmpXchg.html\" title=\"struct llvm_ir::instruction::CmpXchg\">CmpXchg</a>","synthetic":true,"types":["llvm_ir::instruction::CmpXchg"]},{"text":"impl Freeze for <a class=\"struct\" href=\"llvm_ir/instruction/struct.AtomicRMW.html\" title=\"struct llvm_ir::instruction::AtomicRMW\">AtomicRMW</a>","synthetic":true,"types":["llvm_ir::instruction::AtomicRMW"]},{"text":"impl Freeze for <a class=\"struct\" href=\"llvm_ir/instruction/struct.GetElementPtr.html\" title=\"struct llvm_ir::instruction::GetElementPtr\">GetElementPtr</a>","synthetic":true,"types":["llvm_ir::instruction::GetElementPtr"]},{"text":"impl Freeze for <a class=\"struct\" href=\"llvm_ir/instruction/struct.Trunc.html\" title=\"struct llvm_ir::instruction::Trunc\">Trunc</a>","synthetic":true,"types":["llvm_ir::instruction::Trunc"]},{"text":"impl Freeze for <a class=\"struct\" href=\"llvm_ir/instruction/struct.ZExt.html\" title=\"struct llvm_ir::instruction::ZExt\">ZExt</a>","synthetic":true,"types":["llvm_ir::instruction::ZExt"]},{"text":"impl Freeze for <a class=\"struct\" href=\"llvm_ir/instruction/struct.SExt.html\" title=\"struct llvm_ir::instruction::SExt\">SExt</a>","synthetic":true,"types":["llvm_ir::instruction::SExt"]},{"text":"impl Freeze for <a class=\"struct\" href=\"llvm_ir/instruction/struct.FPTrunc.html\" title=\"struct llvm_ir::instruction::FPTrunc\">FPTrunc</a>","synthetic":true,"types":["llvm_ir::instruction::FPTrunc"]},{"text":"impl Freeze for <a class=\"struct\" href=\"llvm_ir/instruction/struct.FPExt.html\" title=\"struct llvm_ir::instruction::FPExt\">FPExt</a>","synthetic":true,"types":["llvm_ir::instruction::FPExt"]},{"text":"impl Freeze for <a class=\"struct\" href=\"llvm_ir/instruction/struct.FPToUI.html\" title=\"struct llvm_ir::instruction::FPToUI\">FPToUI</a>","synthetic":true,"types":["llvm_ir::instruction::FPToUI"]},{"text":"impl Freeze for <a class=\"struct\" href=\"llvm_ir/instruction/struct.FPToSI.html\" title=\"struct llvm_ir::instruction::FPToSI\">FPToSI</a>","synthetic":true,"types":["llvm_ir::instruction::FPToSI"]},{"text":"impl Freeze for <a class=\"struct\" href=\"llvm_ir/instruction/struct.UIToFP.html\" title=\"struct llvm_ir::instruction::UIToFP\">UIToFP</a>","synthetic":true,"types":["llvm_ir::instruction::UIToFP"]},{"text":"impl Freeze for <a class=\"struct\" href=\"llvm_ir/instruction/struct.SIToFP.html\" title=\"struct llvm_ir::instruction::SIToFP\">SIToFP</a>","synthetic":true,"types":["llvm_ir::instruction::SIToFP"]},{"text":"impl Freeze for <a class=\"struct\" href=\"llvm_ir/instruction/struct.PtrToInt.html\" title=\"struct llvm_ir::instruction::PtrToInt\">PtrToInt</a>","synthetic":true,"types":["llvm_ir::instruction::PtrToInt"]},{"text":"impl Freeze for <a class=\"struct\" href=\"llvm_ir/instruction/struct.IntToPtr.html\" title=\"struct llvm_ir::instruction::IntToPtr\">IntToPtr</a>","synthetic":true,"types":["llvm_ir::instruction::IntToPtr"]},{"text":"impl Freeze for <a class=\"struct\" href=\"llvm_ir/instruction/struct.BitCast.html\" title=\"struct llvm_ir::instruction::BitCast\">BitCast</a>","synthetic":true,"types":["llvm_ir::instruction::BitCast"]},{"text":"impl Freeze for <a class=\"struct\" href=\"llvm_ir/instruction/struct.AddrSpaceCast.html\" title=\"struct llvm_ir::instruction::AddrSpaceCast\">AddrSpaceCast</a>","synthetic":true,"types":["llvm_ir::instruction::AddrSpaceCast"]},{"text":"impl Freeze for <a class=\"struct\" href=\"llvm_ir/instruction/struct.ICmp.html\" title=\"struct llvm_ir::instruction::ICmp\">ICmp</a>","synthetic":true,"types":["llvm_ir::instruction::ICmp"]},{"text":"impl Freeze for <a class=\"struct\" href=\"llvm_ir/instruction/struct.FCmp.html\" title=\"struct llvm_ir::instruction::FCmp\">FCmp</a>","synthetic":true,"types":["llvm_ir::instruction::FCmp"]},{"text":"impl Freeze for <a class=\"struct\" href=\"llvm_ir/instruction/struct.Phi.html\" title=\"struct llvm_ir::instruction::Phi\">Phi</a>","synthetic":true,"types":["llvm_ir::instruction::Phi"]},{"text":"impl Freeze for <a class=\"struct\" href=\"llvm_ir/instruction/struct.Select.html\" title=\"struct llvm_ir::instruction::Select\">Select</a>","synthetic":true,"types":["llvm_ir::instruction::Select"]},{"text":"impl Freeze for <a class=\"struct\" href=\"llvm_ir/instruction/struct.Freeze.html\" title=\"struct llvm_ir::instruction::Freeze\">Freeze</a>","synthetic":true,"types":["llvm_ir::instruction::Freeze"]},{"text":"impl Freeze for <a class=\"struct\" href=\"llvm_ir/instruction/struct.Call.html\" title=\"struct llvm_ir::instruction::Call\">Call</a>","synthetic":true,"types":["llvm_ir::instruction::Call"]},{"text":"impl Freeze for <a class=\"struct\" href=\"llvm_ir/instruction/struct.VAArg.html\" title=\"struct llvm_ir::instruction::VAArg\">VAArg</a>","synthetic":true,"types":["llvm_ir::instruction::VAArg"]},{"text":"impl Freeze for <a class=\"struct\" href=\"llvm_ir/instruction/struct.LandingPad.html\" title=\"struct llvm_ir::instruction::LandingPad\">LandingPad</a>","synthetic":true,"types":["llvm_ir::instruction::LandingPad"]},{"text":"impl Freeze for <a class=\"struct\" href=\"llvm_ir/instruction/struct.CatchPad.html\" title=\"struct llvm_ir::instruction::CatchPad\">CatchPad</a>","synthetic":true,"types":["llvm_ir::instruction::CatchPad"]},{"text":"impl Freeze for <a class=\"struct\" href=\"llvm_ir/instruction/struct.CleanupPad.html\" title=\"struct llvm_ir::instruction::CleanupPad\">CleanupPad</a>","synthetic":true,"types":["llvm_ir::instruction::CleanupPad"]},{"text":"impl Freeze for <a class=\"struct\" href=\"llvm_ir/instruction/struct.FastMathFlags.html\" title=\"struct llvm_ir::instruction::FastMathFlags\">FastMathFlags</a>","synthetic":true,"types":["llvm_ir::instruction::FastMathFlags"]},{"text":"impl Freeze for <a class=\"struct\" href=\"llvm_ir/instruction/struct.Atomicity.html\" title=\"struct llvm_ir::instruction::Atomicity\">Atomicity</a>","synthetic":true,"types":["llvm_ir::instruction::Atomicity"]},{"text":"impl Freeze for <a class=\"struct\" href=\"llvm_ir/instruction/struct.InlineAssembly.html\" title=\"struct llvm_ir::instruction::InlineAssembly\">InlineAssembly</a>","synthetic":true,"types":["llvm_ir::instruction::InlineAssembly"]},{"text":"impl Freeze for <a class=\"struct\" href=\"llvm_ir/instruction/struct.LandingPadClause.html\" title=\"struct llvm_ir::instruction::LandingPadClause\">LandingPadClause</a>","synthetic":true,"types":["llvm_ir::instruction::LandingPadClause"]},{"text":"impl Freeze for <a class=\"enum\" href=\"llvm_ir/instruction/enum.Instruction.html\" title=\"enum llvm_ir::instruction::Instruction\">Instruction</a>","synthetic":true,"types":["llvm_ir::instruction::Instruction"]},{"text":"impl Freeze for <a class=\"enum\" href=\"llvm_ir/instruction/enum.TailCallKind.html\" title=\"enum llvm_ir::instruction::TailCallKind\">TailCallKind</a>","synthetic":true,"types":["llvm_ir::instruction::TailCallKind"]},{"text":"impl Freeze for <a class=\"enum\" href=\"llvm_ir/instruction/enum.SynchronizationScope.html\" title=\"enum llvm_ir::instruction::SynchronizationScope\">SynchronizationScope</a>","synthetic":true,"types":["llvm_ir::instruction::SynchronizationScope"]},{"text":"impl Freeze for <a class=\"enum\" href=\"llvm_ir/instruction/enum.MemoryOrdering.html\" title=\"enum llvm_ir::instruction::MemoryOrdering\">MemoryOrdering</a>","synthetic":true,"types":["llvm_ir::instruction::MemoryOrdering"]},{"text":"impl Freeze for <a class=\"enum\" href=\"llvm_ir/instruction/enum.RMWBinOp.html\" title=\"enum llvm_ir::instruction::RMWBinOp\">RMWBinOp</a>","synthetic":true,"types":["llvm_ir::instruction::RMWBinOp"]},{"text":"impl Freeze for <a class=\"enum\" href=\"llvm_ir/instruction/groups/enum.BinaryOp.html\" title=\"enum llvm_ir::instruction::groups::BinaryOp\">BinaryOp</a>","synthetic":true,"types":["llvm_ir::instruction::groups::BinaryOp"]},{"text":"impl Freeze for <a class=\"enum\" href=\"llvm_ir/instruction/groups/enum.UnaryOp.html\" title=\"enum llvm_ir::instruction::groups::UnaryOp\">UnaryOp</a>","synthetic":true,"types":["llvm_ir::instruction::groups::UnaryOp"]},{"text":"impl Freeze for <a class=\"struct\" href=\"llvm_ir/module/struct.Module.html\" title=\"struct llvm_ir::module::Module\">Module</a>","synthetic":true,"types":["llvm_ir::module::Module"]},{"text":"impl Freeze for <a class=\"struct\" href=\"llvm_ir/module/struct.GlobalVariable.html\" title=\"struct llvm_ir::module::GlobalVariable\">GlobalVariable</a>","synthetic":true,"types":["llvm_ir::module::GlobalVariable"]},{"text":"impl Freeze for <a class=\"struct\" href=\"llvm_ir/module/struct.GlobalAlias.html\" title=\"struct llvm_ir::module::GlobalAlias\">GlobalAlias</a>","synthetic":true,"types":["llvm_ir::module::GlobalAlias"]},{"text":"impl Freeze for <a class=\"struct\" href=\"llvm_ir/module/struct.FunctionAttributeGroup.html\" title=\"struct llvm_ir::module::FunctionAttributeGroup\">FunctionAttributeGroup</a>","synthetic":true,"types":["llvm_ir::module::FunctionAttributeGroup"]},{"text":"impl Freeze for <a class=\"struct\" href=\"llvm_ir/module/struct.Comdat.html\" title=\"struct llvm_ir::module::Comdat\">Comdat</a>","synthetic":true,"types":["llvm_ir::module::Comdat"]},{"text":"impl Freeze for <a class=\"enum\" href=\"llvm_ir/module/enum.UnnamedAddr.html\" title=\"enum llvm_ir::module::UnnamedAddr\">UnnamedAddr</a>","synthetic":true,"types":["llvm_ir::module::UnnamedAddr"]},{"text":"impl Freeze for <a class=\"enum\" href=\"llvm_ir/module/enum.Linkage.html\" title=\"enum llvm_ir::module::Linkage\">Linkage</a>","synthetic":true,"types":["llvm_ir::module::Linkage"]},{"text":"impl Freeze for <a class=\"enum\" href=\"llvm_ir/module/enum.Visibility.html\" title=\"enum llvm_ir::module::Visibility\">Visibility</a>","synthetic":true,"types":["llvm_ir::module::Visibility"]},{"text":"impl Freeze for <a class=\"enum\" href=\"llvm_ir/module/enum.DLLStorageClass.html\" title=\"enum llvm_ir::module::DLLStorageClass\">DLLStorageClass</a>","synthetic":true,"types":["llvm_ir::module::DLLStorageClass"]},{"text":"impl Freeze for <a class=\"enum\" href=\"llvm_ir/module/enum.ThreadLocalMode.html\" title=\"enum llvm_ir::module::ThreadLocalMode\">ThreadLocalMode</a>","synthetic":true,"types":["llvm_ir::module::ThreadLocalMode"]},{"text":"impl Freeze for <a class=\"enum\" href=\"llvm_ir/module/enum.SelectionKind.html\" title=\"enum llvm_ir::module::SelectionKind\">SelectionKind</a>","synthetic":true,"types":["llvm_ir::module::SelectionKind"]},{"text":"impl Freeze for <a class=\"enum\" href=\"llvm_ir/name/enum.Name.html\" title=\"enum llvm_ir::name::Name\">Name</a>","synthetic":true,"types":["llvm_ir::name::Name"]},{"text":"impl Freeze for <a class=\"enum\" href=\"llvm_ir/operand/enum.Operand.html\" title=\"enum llvm_ir::operand::Operand\">Operand</a>","synthetic":true,"types":["llvm_ir::operand::Operand"]},{"text":"impl Freeze for <a class=\"enum\" href=\"llvm_ir/predicates/enum.IntPredicate.html\" title=\"enum llvm_ir::predicates::IntPredicate\">IntPredicate</a>","synthetic":true,"types":["llvm_ir::predicates::IntPredicate"]},{"text":"impl Freeze for <a class=\"enum\" href=\"llvm_ir/predicates/enum.FPPredicate.html\" title=\"enum llvm_ir::predicates::FPPredicate\">FPPredicate</a>","synthetic":true,"types":["llvm_ir::predicates::FPPredicate"]},{"text":"impl Freeze for <a class=\"struct\" href=\"llvm_ir/terminator/struct.Ret.html\" title=\"struct llvm_ir::terminator::Ret\">Ret</a>","synthetic":true,"types":["llvm_ir::terminator::Ret"]},{"text":"impl Freeze for <a class=\"struct\" href=\"llvm_ir/terminator/struct.Br.html\" title=\"struct llvm_ir::terminator::Br\">Br</a>","synthetic":true,"types":["llvm_ir::terminator::Br"]},{"text":"impl Freeze for <a class=\"struct\" href=\"llvm_ir/terminator/struct.CondBr.html\" title=\"struct llvm_ir::terminator::CondBr\">CondBr</a>","synthetic":true,"types":["llvm_ir::terminator::CondBr"]},{"text":"impl Freeze for <a class=\"struct\" href=\"llvm_ir/terminator/struct.Switch.html\" title=\"struct llvm_ir::terminator::Switch\">Switch</a>","synthetic":true,"types":["llvm_ir::terminator::Switch"]},{"text":"impl Freeze for <a class=\"struct\" href=\"llvm_ir/terminator/struct.IndirectBr.html\" title=\"struct llvm_ir::terminator::IndirectBr\">IndirectBr</a>","synthetic":true,"types":["llvm_ir::terminator::IndirectBr"]},{"text":"impl Freeze for <a class=\"struct\" href=\"llvm_ir/terminator/struct.Invoke.html\" title=\"struct llvm_ir::terminator::Invoke\">Invoke</a>","synthetic":true,"types":["llvm_ir::terminator::Invoke"]},{"text":"impl Freeze for <a class=\"struct\" href=\"llvm_ir/terminator/struct.Resume.html\" title=\"struct llvm_ir::terminator::Resume\">Resume</a>","synthetic":true,"types":["llvm_ir::terminator::Resume"]},{"text":"impl Freeze for <a class=\"struct\" href=\"llvm_ir/terminator/struct.Unreachable.html\" title=\"struct llvm_ir::terminator::Unreachable\">Unreachable</a>","synthetic":true,"types":["llvm_ir::terminator::Unreachable"]},{"text":"impl Freeze for <a class=\"struct\" href=\"llvm_ir/terminator/struct.CleanupRet.html\" title=\"struct llvm_ir::terminator::CleanupRet\">CleanupRet</a>","synthetic":true,"types":["llvm_ir::terminator::CleanupRet"]},{"text":"impl Freeze for <a class=\"struct\" href=\"llvm_ir/terminator/struct.CatchRet.html\" title=\"struct llvm_ir::terminator::CatchRet\">CatchRet</a>","synthetic":true,"types":["llvm_ir::terminator::CatchRet"]},{"text":"impl Freeze for <a class=\"struct\" href=\"llvm_ir/terminator/struct.CatchSwitch.html\" title=\"struct llvm_ir::terminator::CatchSwitch\">CatchSwitch</a>","synthetic":true,"types":["llvm_ir::terminator::CatchSwitch"]},{"text":"impl Freeze for <a class=\"struct\" href=\"llvm_ir/terminator/struct.CallBr.html\" title=\"struct llvm_ir::terminator::CallBr\">CallBr</a>","synthetic":true,"types":["llvm_ir::terminator::CallBr"]},{"text":"impl Freeze for <a class=\"enum\" href=\"llvm_ir/terminator/enum.Terminator.html\" title=\"enum llvm_ir::terminator::Terminator\">Terminator</a>","synthetic":true,"types":["llvm_ir::terminator::Terminator"]},{"text":"impl Freeze for <a class=\"enum\" href=\"llvm_ir/types/enum.Type.html\" title=\"enum llvm_ir::types::Type\">Type</a>","synthetic":true,"types":["llvm_ir::types::Type"]},{"text":"impl Freeze for <a class=\"enum\" href=\"llvm_ir/types/enum.FPType.html\" title=\"enum llvm_ir::types::FPType\">FPType</a>","synthetic":true,"types":["llvm_ir::types::FPType"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()