(()=>{var o=function(){function o(){}return o.prototype.workFromHome=function(){return"Working from home"},o.prototype.getCoffeeBreak=function(){return"Getting a coffee break"},o.prototype.workDirectorTasks=function(){return"Getting to director tasks"},o}(),e=function(){function o(){}return o.prototype.workFromHome=function(){return"Cannot work from home"},o.prototype.getCoffeeBreak=function(){return"Cannot have a break"},o.prototype.workTeacherTasks=function(){return"Getting to work"},o}();function r(r){return"number"==typeof r&&r<500?new e:new o}function n(e){!function(e){return e instanceof o}(e)?console.log(e.workTeacherTasks()):console.log(e.workDirectorTasks())}console.log(r(200)),console.log(r(1e3)),console.log(r("$500"));var t=r(200);console.log(t.workFromHome());var c=r(1e3);console.log(c.workFromHome()),n(r(200)),n(r(1e3))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiJNQWVBLDhCQVVBLFFBVEUsWUFBQUEsYUFBQSxXQUNFLE1BQU8sbUJBQ1QsRUFDQSxZQUFBQyxlQUFBLFdBQ0UsTUFBTyx3QkFDVCxFQUNBLFlBQUFDLGtCQUFBLFdBQ0UsTUFBTywyQkFDVCxFQUNGLEVBVkEsR0FhQSwwQkFVQSxRQVRFLFlBQUFGLGFBQUEsV0FDRSxNQUFPLHVCQUNULEVBQ0EsWUFBQUMsZUFBQSxXQUNFLE1BQU8scUJBQ1QsRUFDQSxZQUFBRSxpQkFBQSxXQUNFLE1BQU8saUJBQ1QsRUFDRixFQVZBLEdBa0JBLFNBQVNDLEVBQWVDLEdBQ3RCLE1BQXNCLGlCQUFYQSxHQUF1QkEsRUFBUyxJQUNsQyxJQUFJQyxFQUVOLElBQUlDLENBQ2IsQ0FRQSxTQUFTQyxFQUFZQyxJQUxyQixTQUFvQkEsR0FDbEIsT0FBT0EsYUFBb0JGLENBQzdCLENBSU1HLENBQVdELEdBR2JFLFFBQVFDLElBQUlILEVBQVNOLG9CQUZyQlEsUUFBUUMsSUFBSUgsRUFBU1Asb0JBSXpCLENBSUFTLFFBQVFDLElBQUlSLEVBQWUsTUFDM0JPLFFBQVFDLElBQUlSLEVBQWUsTUFDM0JPLFFBQVFDLElBQUlSLEVBQWUsU0FHM0IsSUFBTVMsRUFBWVQsRUFBZSxLQUNqQ08sUUFBUUMsSUFBSUMsRUFBVWIsZ0JBRXRCLElBQU1jLEVBQVlWLEVBQWUsS0FDakNPLFFBQVFDLElBQUlFLEVBQVVkLGdCQUV0QlEsRUFBWUosRUFBZSxNQUMzQkksRUFBWUosRUFBZSxLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZXBlbmRlbmNpZXMvLi9qcy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSBEaXJlY3RvckludGVyZmFjZSBpbnRlcmZhY2VcbmludGVyZmFjZSBEaXJlY3RvckludGVyZmFjZSB7XG4gIHdvcmtGcm9tSG9tZSgpOiBzdHJpbmc7XG4gIGdldENvZmZlZUJyZWFrKCk6IHN0cmluZztcbiAgd29ya0RpcmVjdG9yVGFza3MoKTogc3RyaW5nO1xufVxuXG4vLyBUaGUgVGVhY2hlckludGVyZmFjZSBpbnRlcmZhY2VcbmludGVyZmFjZSBUZWFjaGVySW50ZXJmYWNlIHtcbiAgd29ya0Zyb21Ib21lKCk6IHN0cmluZztcbiAgZ2V0Q29mZmVlQnJlYWsoKTogc3RyaW5nO1xuICB3b3JrVGVhY2hlclRhc2tzKCk6IHN0cmluZztcbn1cblxuLy8gVGhlIERpcmVjdG9yIGNsYXNzIGltcGxlbWVudGluZyB0aGUgRGlyZWN0b3JJbnRlcmZhY2UgaW50ZXJmYWNlXG5jbGFzcyBEaXJlY3RvciBpbXBsZW1lbnRzIERpcmVjdG9ySW50ZXJmYWNlIHtcbiAgd29ya0Zyb21Ib21lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICdXb3JraW5nIGZyb20gaG9tZSdcbiAgfVxuICBnZXRDb2ZmZWVCcmVhaygpOiBzdHJpbmcge1xuICAgIHJldHVybiAnR2V0dGluZyBhIGNvZmZlZSBicmVhaydcbiAgfVxuICB3b3JrRGlyZWN0b3JUYXNrcygpOiBzdHJpbmcge1xuICAgIHJldHVybiAnR2V0dGluZyB0byBkaXJlY3RvciB0YXNrcydcbiAgfVxufVxuXG4vLyBUaGUgVGVhY2hlciBjbGFzcyBpbXBsZW1lbnRpbmcgdGhlIFRlYWNoZXJJbnRlcmZhY2UgaW50ZXJmYWNlXG5jbGFzcyBUZWFjaGVyIGltcGxlbWVudHMgVGVhY2hlckludGVyZmFjZSB7XG4gIHdvcmtGcm9tSG9tZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiAnQ2Fubm90IHdvcmsgZnJvbSBob21lJztcbiAgfVxuICBnZXRDb2ZmZWVCcmVhaygpOiBzdHJpbmcge1xuICAgIHJldHVybiAnQ2Fubm90IGhhdmUgYSBicmVhayc7XG4gIH1cbiAgd29ya1RlYWNoZXJUYXNrcygpOiBzdHJpbmcge1xuICAgIHJldHVybiAnR2V0dGluZyB0byB3b3JrJztcbiAgfVxufVxuXG4vLyBDcmVhdGUgYSBmdW5jdGlvbiBjcmVhdGVFbXBsb3llZSB3aXRoIHRoZSBmb2xsb3dpbmcgcmVxdWlyZW1lbnRzOlxuLy8gSXQgY2FuIHJldHVybiBlaXRoZXIgYSBEaXJlY3RvciBvciBhIFRlYWNoZXIgaW5zdGFuY2Vcbi8vIEl0IGFjY2VwdHMgMSBhcmd1bWVudHM6XG4vLyBzYWxhcnkoZWl0aGVyIG51bWJlciBvciBzdHJpbmcpXG4vLyBpZiBzYWxhcnkgaXMgYSBudW1iZXIgYW5kIGxlc3MgdGhhbiA1MDAgLSBJdCBzaG91bGQgcmV0dXJuIGEgbmV3IFRlYWNoZXIuIE90aGVyd2lzZSBpdCBzaG91bGQgcmV0dXJuIGEgRGlyZWN0b3JcblxuZnVuY3Rpb24gY3JlYXRlRW1wbG95ZWUoc2FsYXJ5OiBudW1iZXIgfCBzdHJpbmcpOiBEaXJlY3RvciB8IFRlYWNoZXIge1xuICBpZiAodHlwZW9mIHNhbGFyeSA9PT0gJ251bWJlcicgJiYgc2FsYXJ5IDwgNTAwKSB7XG4gICAgcmV0dXJuIG5ldyBUZWFjaGVyKCk7XG4gIH1cbiAgcmV0dXJuIG5ldyBEaXJlY3RvcigpO1xufVxuXG4vLyBEZWZpbmUgdGhlIGlzRGlyZWN0b3IgZnVuY3Rpb24gYXMgYSB0eXBlIHByZWRpY2F0ZVxuZnVuY3Rpb24gaXNEaXJlY3RvcihlbXBsb3llZTogRGlyZWN0b3IgfCBUZWFjaGVyKTogZW1wbG95ZWUgaXMgRGlyZWN0b3Ige1xuICByZXR1cm4gZW1wbG95ZWUgaW5zdGFuY2VvZiBEaXJlY3Rvcjtcbn1cblxuLy8gRGVmaW5lIHRoZSBleGVjdXRlV29yayBmdW5jdGlvblxuZnVuY3Rpb24gZXhlY3V0ZVdvcmsoZW1wbG95ZWU6IERpcmVjdG9yIHwgVGVhY2hlcik6IHZvaWQge1xuICBpZiAoaXNEaXJlY3RvcihlbXBsb3llZSkpIHtcbiAgICBjb25zb2xlLmxvZyhlbXBsb3llZS53b3JrRGlyZWN0b3JUYXNrcygpKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmxvZyhlbXBsb3llZS53b3JrVGVhY2hlclRhc2tzKCkpO1xuICB9XG59XG5cblxuLy8gRXhhbXBsZSB1c2FnZVxuY29uc29sZS5sb2coY3JlYXRlRW1wbG95ZWUoMjAwKSk7IC8vIE91dHB1dDogVGVhY2hlclxuY29uc29sZS5sb2coY3JlYXRlRW1wbG95ZWUoMTAwMCkpOyAvLyBPdXRwdXQ6IERpcmVjdG9yXG5jb25zb2xlLmxvZyhjcmVhdGVFbXBsb3llZSgnJDUwMCcpKTsgLy8gT3V0cHV0OiBEaXJlY3RvclxuXG4vLyBGb3IgZGV0YWlsZWQgb3V0cHV0OlxuY29uc3QgZW1wbG95ZWUxID0gY3JlYXRlRW1wbG95ZWUoMjAwKTtcbmNvbnNvbGUubG9nKGVtcGxveWVlMS53b3JrRnJvbUhvbWUoKSk7IC8vIE91dHB1dDogQ2Fubm90IHdvcmsgZnJvbSBob21lXG5cbmNvbnN0IGVtcGxveWVlMiA9IGNyZWF0ZUVtcGxveWVlKDEwMDApO1xuY29uc29sZS5sb2coZW1wbG95ZWUyLndvcmtGcm9tSG9tZSgpKTsgLy8gT3V0cHV0OiBXb3JraW5nIGZyb20gaG9tZVxuXG5leGVjdXRlV29yayhjcmVhdGVFbXBsb3llZSgyMDApKTsgLy8gT3V0cHV0OiBHZXR0aW5nIHRvIHdvcmtcbmV4ZWN1dGVXb3JrKGNyZWF0ZUVtcGxveWVlKDEwMDApKTsgLy8gT3V0cHV0OiBHZXR0aW5nIHRvIGRpcmVjdG9yIHRhc2tzXG4iXSwibmFtZXMiOlsid29ya0Zyb21Ib21lIiwiZ2V0Q29mZmVlQnJlYWsiLCJ3b3JrRGlyZWN0b3JUYXNrcyIsIndvcmtUZWFjaGVyVGFza3MiLCJjcmVhdGVFbXBsb3llZSIsInNhbGFyeSIsIlRlYWNoZXIiLCJEaXJlY3RvciIsImV4ZWN1dGVXb3JrIiwiZW1wbG95ZWUiLCJpc0RpcmVjdG9yIiwiY29uc29sZSIsImxvZyIsImVtcGxveWVlMSIsImVtcGxveWVlMiJdLCJzb3VyY2VSb290IjoiIn0=