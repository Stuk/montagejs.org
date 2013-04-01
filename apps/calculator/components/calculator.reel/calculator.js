var Montage=require("montage").Montage,Component=require("montage/ui/component").Component,Expression=require("model/expression").Expression;exports.Calculator=Montage.create(Component,{_currentNumberStack:{enumerable:!1,value:[],distinct:!0},_currentNumberString:{value:"0",enumerable:!1},_storedMemoryValue:{enumerable:!1,value:0},memoryHasValue:{value:!1},_previousResultNumber:{enumerable:!1,value:[],distinct:!0},_previousOperator:{enumerable:!1,value:"plus"},_clearAll:{value:!1,enumerable:!1},expression:{enumerable:!1,value:null},MAX_DISPLAY_LENGTH:{value:10,writable:!1},DECIMAL_EXPONENT_LENGTH:{value:5,writable:!1},MAX_EXPRESSION_DISPLAY_LENGTH:{value:37,writable:!1},currentNumberElement:{value:null,serializable:!0},currentResultElement:{value:null,serializable:!0},LEDElement:{value:null,serializable:!0},draw:{value:function(e){var t="";this.currentNumberElement.innerHTML=this.formatNumberString(this._currentNumberString),this.expression===null?(this.currentResultElement.innerHTML="",this.LEDElement.innerHTML=0):(this.expression.rhs!==null&&(t="&nbsp;=&nbsp;"+this.expression.result()),this.currentResultElement.innerHTML=t,this.LEDElement.innerHTML=this.formatExpressionString(this.expression.toString(),(""+t).replace(/&nbsp;/g," ")))}},formatExpressionString:{value:function(e,t){var n=e,r=e.length,i=t.length;return r+i>this.MAX_EXPRESSION_DISPLAY_LENGTH&&(n=e.slice(r+i-this.MAX_EXPRESSION_DISPLAY_LENGTH,r),n="..."+n),n}},formatNumberString:{value:function(e){var t=e,n;return e.length>this.MAX_DISPLAY_LENGTH&&(n=parseFloat(e),t=n.toExponential(this.DECIMAL_EXPONENT_LENGTH)),t}},buildExpression:{value:function(){this.expression==null&&(this.expression=Montage.create(Expression));var e=this._currentNumberStack.join("");e.indexOf(".")!=-1?this.expression.build(parseFloat(e)):this.expression.build(parseInt(e,10))}},updateNumber:{value:function(e){this._clearAll=!1,Array.isArray(e)?this._currentNumberStack=this._currentNumberStack.concat(e):this._currentNumberStack.push(e),this._currentNumberString=this._currentNumberStack.join(""),this.buildExpression(),this.needsDraw=!0}},addOperatorToExpression:{value:function(e){this.expression==null&&(this.expression=Montage.create(Expression),this.expression.build(0)),this.expression.addOperator(e),this._previousOperator=e,this._currentNumberStack.length>0&&(this._previousResultNumber=this._currentNumberStack.slice(0)),this._currentNumberStack=[],this.needsDraw=!0}},addDecimal:{value:function(){this._currentNumberStack.join("").indexOf(".")==-1&&(this._currentNumberStack.length==0?this.updateNumber(["0","."]):this.updateNumber("."))}},result:{value:function(){var e;this.expression?this.expression.operator!=null&&this.expression.rhs==null?(this._restorePreviousResultToCurrentNumber(),this.buildExpression()):this.expression.operator==null&&this.expression.rhs==null&&(this.expression.addOperator(this._previousOperator),this._restorePreviousResultToCurrentNumber(),this.buildExpression()):(this.expression=Montage.create(Expression),this._currentNumberStack=["0"],this.buildExpression(),this.expression.addOperator(this._previousOperator),this._restorePreviousResultToCurrentNumber(),this.buildExpression()),this.dispatchResultEvent(this.expression),e=this.expression.result(),this.resetCalculator(),e!=0&&e!="Error"?this.updateNumber(Array.prototype.slice.call(""+e,"")):this._currentNumberString=e,this._clearAll=!0,this.needsDraw=!0}},_restorePreviousResultToCurrentNumber:{value:function(){this._previousResultNumber.length>0?this._currentNumberStack=this._previousResultNumber.slice(0):this._currentNumberStack=["0"]}},dispatchResultEvent:{value:function(e){var t={expression:e},n=document.createEvent("CustomEvent");n.initCustomEvent("calcResult",!0,!1,t),this.dispatchEvent(n)}},resetCalculator:{value:function(){this.expression=null,this._previousResultNumber=this._currentNumberStack.slice(0),this._currentNumberStack=[],this._currentNumberString="0",this.needsDraw=!0}},backspace:{value:function(){this._currentNumberStack.length>0&&this._currentNumberStack.pop(),this._currentNumberStack.length>0&&(this._currentNumberStack.length!=1||this._currentNumberStack[0]!="-")?(this.buildExpression(),this._currentNumberString=this._currentNumberStack.join("")):(this._previousResultNumber=this._currentNumberStack.slice(0),this._currentNumberStack=[],this._currentNumberString="0",this.expression=null),this.needsDraw=!0}},memoryRecall:{value:function(){this.resetCalculator(),this._storedMemoryValue!=0&&this.updateNumber(Array.prototype.slice.call(""+this._storedMemoryValue,""))}},memoryCalculation:{value:function(e){var t=parseFloat(this._currentNumberStack.join("")),n=this._storedMemoryValue;isNaN(t)&&(t=0),e===Expression.OP_MINUS&&(t*=-1),this._storedMemoryValue=n+t,this._previousResultNumber=this._currentNumberStack.slice(0),this._currentNumberStack=[],this.memoryHasValue=!0}},memoryClear:{value:function(){this._storedMemoryValue=0,this.memoryHasValue=!1}},handleMemoryClearRecallHold:{value:function(e){this.memoryClear()}},handleClearHold:{value:function(e){this.resetCalculator()}},handleClearAction:{value:function(e){this._clearAll?this._clearAll&&(this.resetCalculator(),this._clearAll=!1):this.backspace()}},handleEqualAction:{value:function(e){this.result()}},handleDecimalAction:{value:function(e){this.addDecimal()}},handlePlusAction:{value:function(e){this.addOperatorToExpression(Expression.OP_PLUS)}},handleMinusAction:{value:function(e){this.addOperatorToExpression(Expression.OP_MINUS)}},handleMultiplyAction:{value:function(e){this.addOperatorToExpression(Expression.OP_MULTIPLY)}},handleDivideAction:{value:function(e){this.addOperatorToExpression(Expression.OP_DIVIDE)}},handleMemoryClearRecallAction:{value:function(e){this.memoryRecall()}},handleMemoryAddAction:{value:function(e){this.memoryCalculation(Expression.OP_PLUS)}},handleMemoryMinusAction:{value:function(e){this.memoryCalculation(Expression.OP_MINUS)}},handleNineAction:{value:function(e){this.updateNumber("9")}},handleEightAction:{value:function(e){this.updateNumber("8")}},handleSevenAction:{value:function(e){this.updateNumber("7")}},handleSixAction:{value:function(e){this.updateNumber("6")}},handleFiveAction:{value:function(e){this.updateNumber("5")}},handleFourAction:{value:function(e){this.updateNumber("4")}},handleThreeAction:{value:function(e){this.updateNumber("3")}},handleTwoAction:{value:function(e){this.updateNumber("2")}},handleOneAction:{value:function(e){this.updateNumber("1")}},handleZeroAction:{value:function(e){this.updateNumber("0")}}})