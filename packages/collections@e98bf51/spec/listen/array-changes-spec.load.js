montageDefine("e98bf51","spec/listen/array-changes-spec",{dependencies:["../../listen/array-changes"],factory:function(e,t,n){e("../../listen/array-changes"),describe("Array change dispatch",function(){var e=[1,2,3],t;it("set up listeners",function(){e.addBeforeOwnPropertyChangeListener("length",function(e){t("length change from",e)}),e.addOwnPropertyChangeListener("length",function(e){t("length change to",e)}),e.addBeforeRangeChangeListener(function(e,n,r){t("before content change at",r,"to add",e.slice(),"to remove",n.slice())}),e.addRangeChangeListener(function(e,n,r){t("content change at",r,"added",e.slice(),"removed",n.slice())}),e.addBeforeMapChangeListener(function(e,n){t("change at",n,"from",e)}),e.addMapChangeListener(function(e,n){t("change at",n,"to",e)})}),it("clear initial values",function(){t=jasmine.createSpy(),expect(e.slice()).toEqual([1,2,3]),e.clear(),expect(e.slice()).toEqual([]),expect(t.argsForCall).toEqual([["length change from",3],["before content change at",0,"to add",[],"to remove",[1,2,3]],["change at",0,"from",1],["change at",1,"from",2],["change at",2,"from",3],["change at",0,"to",undefined],["change at",1,"to",undefined],["change at",2,"to",undefined],["content change at",0,"added",[],"removed",[1,2,3]],["length change to",0]])}),it("push two values on empty array",function(){t=jasmine.createSpy(),expect(e.slice()).toEqual([]),e.push(10,20),expect(e.slice()).toEqual([10,20]),expect(t.argsForCall).toEqual([["length change from",0],["before content change at",0,"to add",[10,20],"to remove",[]],["change at",0,"from",undefined],["change at",1,"from",undefined],["change at",0,"to",10],["change at",1,"to",20],["content change at",0,"added",[10,20],"removed",[]],["length change to",2]])}),it("pop one value",function(){t=jasmine.createSpy(),expect(e.slice()).toEqual([10,20]),e.pop(),expect(e.slice()).toEqual([10]),expect(t.argsForCall).toEqual([["length change from",2],["before content change at",1,"to add",[],"to remove",[20]],["change at",1,"from",20],["change at",1,"to",undefined],["content change at",1,"added",[],"removed",[20]],["length change to",1]])}),it("push two values on top of existing one, with hole open for splice",function(){t=jasmine.createSpy(),expect(e.slice()).toEqual([10]),e.push(40,50),expect(e.slice()).toEqual([10,40,50]),expect(t.argsForCall).toEqual([["length change from",1],["before content change at",1,"to add",[40,50],"to remove",[]],["change at",1,"from",undefined],["change at",2,"from",undefined],["change at",1,"to",40],["change at",2,"to",50],["content change at",1,"added",[40,50],"removed",[]],["length change to",3]])}),it("splices two values into middle",function(){t=jasmine.createSpy(),expect(e.slice()).toEqual([10,40,50]),expect(e.splice(1,0,20,30)).toEqual([]),expect(e.slice()).toEqual([10,20,30,40,50]),expect(t.argsForCall).toEqual([["length change from",3],["before content change at",1,"to add",[20,30],"to remove",[]],["change at",1,"from",40],["change at",2,"from",50],["change at",3,"from",undefined],["change at",4,"from",undefined],["change at",1,"to",20],["change at",2,"to",30],["change at",3,"to",40],["change at",4,"to",50],["content change at",1,"added",[20,30],"removed",[]],["length change to",5]])}),it("pushes one value to end",function(){t=jasmine.createSpy(),expect(e.slice()).toEqual([10,20,30,40,50]),e.push(60),expect(e.slice()).toEqual([10,20,30,40,50,60]),expect(t.argsForCall).toEqual([["length change from",5],["before content change at",5,"to add",[60],"to remove",[]],["change at",5,"from",undefined],["change at",5,"to",60],["content change at",5,"added",[60],"removed",[]],["length change to",6]])}),it("splices in place",function(){t=jasmine.createSpy(),expect(e.slice()).toEqual([10,20,30,40,50,60]),expect(e.splice(2,2,"A","B")).toEqual([30,40]),expect(e.slice()).toEqual([10,20,"A","B",50,60]),expect(t.argsForCall).toEqual([["before content change at",2,"to add",["A","B"],"to remove",[30,40]],["change at",2,"from",30],["change at",3,"from",40],["change at",2,"to","A"],["change at",3,"to","B"],["content change at",2,"added",["A","B"],"removed",[30,40]]])}),it("shifts one from the beginning",function(){e.clear(),e.push(10,20,30),t=jasmine.createSpy(),expect(e.slice()).toEqual([10,20,30]),expect(e.shift()).toEqual(10),expect(e.slice()).toEqual([20,30]),expect(t.argsForCall).toEqual([["length change from",3],["before content change at",0,"to add",[],"to remove",[10]],["change at",0,"from",10],["change at",1,"from",20],["change at",2,"from",30],["change at",0,"to",20],["change at",1,"to",30],["change at",2,"to",undefined],["content change at",0,"added",[],"removed",[10]],["length change to",2]])}),it("sets new value at end",function(){t=jasmine.createSpy(),expect(e.slice()).toEqual([20,30]),expect(e.set(2,40)).toBe(e),expect(e.slice()).toEqual([20,30,40]),expect(t.argsForCall).toEqual([["length change from",2],["before content change at",2,"to add",[40],"to remove",[]],["change at",2,"from",undefined],["change at",2,"to",40],["content change at",2,"added",[40],"removed",[]],["length change to",3]])}),it("sets new value at beginning",function(){t=jasmine.createSpy(),expect(e.slice()).toEqual([20,30,40]),expect(e.set(0,10)).toBe(e),expect(e.slice()).toEqual([10,30,40]),expect(t.argsForCall).toEqual([["before content change at",0,"to add",[10],"to remove",[20]],["change at",0,"from",20],["change at",0,"to",10],["content change at",0,"added",[10],"removed",[20]]])}),it("unshifts one to the beginning",function(){e.clear(),expect(e.slice()).toEqual([]),t=jasmine.createSpy(),e.unshift(30),expect(e.slice()).toEqual([30]),expect(t.argsForCall).toEqual([["length change from",0],["before content change at",0,"to add",[30],"to remove",[]],["change at",0,"from",undefined],["change at",0,"to",30],["content change at",0,"added",[30],"removed",[]],["length change to",1]])}),it("unshifts two values on beginning of already populated array",function(){t=jasmine.createSpy(),expect(e.slice()).toEqual([30]),e.unshift(10,20),expect(e.slice()).toEqual([10,20,30]),expect(t.argsForCall).toEqual([["length change from",1],["before content change at",0,"to add",[10,20],"to remove",[]],["change at",0,"from",30],["change at",1,"from",undefined],["change at",2,"from",undefined],["change at",0,"to",10],["change at",1,"to",20],["change at",2,"to",30],["content change at",0,"added",[10,20],"removed",[]],["length change to",3]])}),it("reverses in place",function(){t=jasmine.createSpy(),expect(e.slice()).toEqual([10,20,30]),e.reverse(),expect(e.slice()).toEqual([30,20,10]),expect(t.argsForCall).toEqual([["before content change at",0,"to add",[10,20,30],"to remove",[10,20,30]],["change at",0,"from",10],["change at",1,"from",20],["change at",2,"from",30],["change at",0,"to",30],["change at",1,"to",20],["change at",2,"to",10],["content change at",0,"added",[30,20,10],"removed",[30,20,10]]])}),it("sorts in place",function(){t=jasmine.createSpy(),expect(e.slice()).toEqual([30,20,10]),e.sort(),expect(e.slice()).toEqual([10,20,30]),expect(t.argsForCall).toEqual([["before content change at",0,"to add",[30,20,10],"to remove",[30,20,10]],["change at",0,"from",30],["change at",1,"from",20],["change at",2,"from",10],["change at",0,"to",10],["change at",1,"to",20],["change at",2,"to",30],["content change at",0,"added",[10,20,30],"removed",[10,20,30]]])}),it("deletes one value",function(){t=jasmine.createSpy(),expect(e.slice()).toEqual([10,20,30]),expect(e.delete(40)).toBe(!1),expect(e.delete(20)).toBe(!0),expect(e.slice()).toEqual([10,30]),expect(t.argsForCall).toEqual([["length change from",3],["before content change at",1,"to add",[],"to remove",[20]],["change at",1,"from",20],["change at",2,"from",30],["change at",1,"to",30],["change at",2,"to",undefined],["content change at",1,"added",[],"removed",[20]],["length change to",2]])}),it("clears all values finally",function(){t=jasmine.createSpy(),expect(e.slice()).toEqual([10,30]),e.clear(),expect(e.slice()).toEqual([]),expect(t.argsForCall).toEqual([["length change from",2],["before content change at",0,"to add",[],"to remove",[10,30]],["change at",0,"from",10],["change at",1,"from",30],["change at",0,"to",undefined],["change at",1,"to",undefined],["content change at",0,"added",[],"removed",[10,30]],["length change to",0]])}),it("removes content change listeners",function(){t=jasmine.createSpy();var n=e.getOwnPropertyChangeDescriptor("length");n.willChangeListeners.forEach(function(t){e.removeBeforeOwnPropertyChangeListener("length",t)}),n.changeListeners.forEach(function(t){e.removeOwnPropertyChangeListener("length",t)});var n=e.getRangeChangeDescriptor();n.willChangeListeners.forEach(function(t){e.removeBeforeRangeChangeListener(t)}),n.changeListeners.forEach(function(t){e.removeRangeChangeListener(t)});var n=e.getMapChangeDescriptor();n.willChangeListeners.forEach(function(t){e.removeBeforeMapChangeListener(t)}),n.changeListeners.forEach(function(t){e.removeMapChangeListener(t)}),e.splice(0,0,1,2,3),expect(t).wasNotCalled()}),it("handles cyclic content change listeners",function(){var e=[],t=[];e.addRangeChangeListener(function(e,n,r){if(t.getRangeChangeDescriptor().isActive)return;t.splice.apply(t,[r,n.length].concat(e))}),t.addRangeChangeListener(function(t,n,r){if(e.getRangeChangeDescriptor().isActive)return;e.splice.apply(e,[r,n.length].concat(t))}),e.push(10,20,30),expect(t.slice()).toEqual([10,20,30]),t.pop(),expect(e.slice()).toEqual([10,20])}),it("observes length changes on arrays that are not otherwised observed",function(){var e=[1,2,3],t=jasmine.createSpy();e.addOwnPropertyChangeListener("length",t),e.push(4),expect(t).toHaveBeenCalled()})})}})