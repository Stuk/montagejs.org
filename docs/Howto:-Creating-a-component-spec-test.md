Creating a component spec test

1. Create a new Javascript file test/ui/todo-spec.js

2. Fill it with this template, replacing the bold/TODO strings

/* <copyright>
 This file contains proprietary software owned by Motorola Mobility, Inc.<br/>
 No rights, expressed or implied, whatsoever to this software are provided by Motorola Mobility, Inc. hereunder.<br/>
 (c) Copyright 2011 Motorola Mobility, Inc.  All Rights Reserved.
 </copyright> */
/*global require,exports,describe,it,expect */
var Montage = require("montage").Montage,
    TestPageLoader = require("support/testpageloader").TestPageLoader;

var testPage = TestPageLoader.queueTest("todo-test", function() {
    var test = testPage.test;

    describe("ui/todo-spec", function() {
        it("should load", function() {
            expect(testPage.loaded).toBe(true);
        });

        describe("Todo", function(){
           it("can be created", function() {
               expect(test.todo1).toBeDefined();
           });
           // … and more
        });
    });
});

3. Create a new directory test/ui/todo-test
4. Create test/ui/todotest/todo-test.html and enter the following:

<!DOCTYPE html>
<!-- <copyright>
 This file contains proprietary software owned by Motorola Mobility, Inc.<br/>
 No rights, expressed or implied, whatsoever to this software are provided by Motorola Mobility, Inc. hereunder.<br/>
 (c) Copyright 2011 Motorola Mobility, Inc.  All Rights Reserved.
 </copyright> -->
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <title>Todo Test</title>
    <script type="text/javascript" src="../../../montage.js" data-package="../../"></script>
    <script type="text/montage-serialization">
{
    "todo1": {
        "prototype": "montage/ui/todo.reel",
        "properties": {
            "element": {"#": "div"}
        }
    },
 
    "test": {
        "prototype": "ui/todo-test/todo-test",
        "name": "TodoTest",
        "properties": {
            "todo1": {"@": "todo1"}
        }
    },
    "application": {
        "module": "montage/ui/application",
        "name": "Application",
        "properties": {
            "delegate": {"@": "test"}
        }
    }
}
    </script>

</head>
<body>
    <h1>Todo test</h1>

    <div data-montage-id="div">something</div>

</body>
</html>

5. Create test/ui/todotest/todo-test.js and enter the following:

/* <copyright>
 This file contains proprietary software owned by Motorola Mobility, Inc.<br/>
 No rights, expressed or implied, whatsoever to this software are provided by Motorola Mobility, Inc. hereunder.<br/>
 (c) Copyright 2011 Motorola Mobility, Inc.  All Rights Reserved.
 </copyright> */
var Montage = require("montage").Montage;

var TodoTest = exports.TodoTest = Montage.create(Montage, {});


6. In the appropriate place (next to other component tests) in test/run.js add the following:

require.async("ui/todo-spec"),

7. Load http://localhost/montage/test/run.html?spec=ui%2Ftodo-spec (your localhost may differ) and check that the test passes.