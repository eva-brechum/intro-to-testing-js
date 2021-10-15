// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});


//Write a test for a function named 'sayHello'.

    describe('sayHello', function(){
        it('should be defined as a function', function(){
            expect(typeof sayHello).toBe('function');
        })
        it('should never return undefined', function() {
            expect(typeof sayHello()).not.toBe('undefined')
        })
        it('should return a string', function() {
            expect(typeof sayHello()).toBe('string');
        })
        it('should return a greeting for the input', function (){
            expect(sayHello("Eva")).toBe("Hello Eva");
        })
    });

// Write a test for a function names 'isFive'.

