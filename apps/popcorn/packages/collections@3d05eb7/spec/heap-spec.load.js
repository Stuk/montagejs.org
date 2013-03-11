montageDefine("3d05eb7","spec/heap-spec",{dependencies:["../heap","./permute"],factory:function(e,t,n){var r=e("../heap"),i=e("./permute");describe("Heap",function(){describe("always tracks the max value",function(){var e=[1,2,3,4,5];i(e).forEach(function(t){it(JSON.stringify(t),function(){var n=r(t),i=e.slice();while(i.length>0){var s=i.pop(),o=n.pop();expect(o).toEqual(s),expect(n.length).toBe(i.length)}expect(n.length).toBe(0)})}),it("[5, 4, 3, 2, 1]",function(){var e=[5,4,3,2,1],t=r(e);expect(t.content).toEqual([5,4,3,2,1]),expect(t.length).toBe(5),expect(t.pop()).toBe(5),expect(t.content).toEqual([4,2,3,1]),expect(t.length).toBe(4),expect(t.pop()).toBe(4),expect(t.content).toEqual([3,2,1]),expect(t.length).toBe(3),expect(t.pop()).toBe(3),expect(t.content).toEqual([2,1]),expect(t.length).toBe(2),expect(t.pop()).toBe(2),expect(t.content).toEqual([1]),expect(t.length).toBe(1),expect(t.pop()).toBe(1),expect(t.content).toEqual([]),expect(t.length).toBe(0)})}),it("should be observable",function(){var e=new r([1,2,3,4,5]),t;e.addMapChangeListener(function(e,n){n===0&&(t=e)}),e.push(7),expect(t).toBe(7),e.pop(),expect(t).toBe(5),e.pop(),expect(t).toBe(4),e.pop(),expect(t).toBe(3)}),it("should delete properly",function(){var e=new r([1,2,3,4,5,6]);e.delete(3),expect(e.sorted()).toEqual([1,2,4,5,6]),e.delete(6),expect(e.sorted()).toEqual([1,2,4,5]),e.delete(1),expect(e.sorted()).toEqual([2,4,5]),e.delete(4),expect(e.sorted()).toEqual([2,5]),e.delete(2),expect(e.sorted()).toEqual([5]),e.delete(5),expect(e.sorted()).toEqual([]),expect(e.delete(null)).toBe(!1),expect(e.sorted()).toEqual([])})})}})