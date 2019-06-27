(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{193:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"world"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#world","aria-hidden":"true"}},[t._v("#")]),t._v(" World")]),t._v(" "),a("p",[t._v("The World is the database of all Entities, Components and Systems. It is also the main interface to create and update all these objects.")]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",[t._v("Please refer to the "),a("a",{attrs:{href:"./installation"}},[t._v("Installation & Setup")]),t._v(" guide to know how to create the World.")])]),t._v(" "),a("h2",{attrs:{id:"entities"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#entities","aria-hidden":"true"}},[t._v("#")]),t._v(" Entities")]),t._v(" "),a("h3",{attrs:{id:"create-an-entity"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-an-entity","aria-hidden":"true"}},[t._v("#")]),t._v(" Create an Entity")]),t._v(" "),a("p",[a("code",[t._v("world.createEntity()")]),t._v(" generates a new incremented id, and saves it inside the world.")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" newEntity "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" world"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createEntity")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// newEntity = '1'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" otherEntity "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" world"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createEntity")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// otherEntity = '2'")]),t._v("\n")])])]),a("h4",{attrs:{id:"manually-register-an-entity"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#manually-register-an-entity","aria-hidden":"true"}},[t._v("#")]),t._v(" Manually register an Entity")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" customEntity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("guid")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nworld"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEntity")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("customEntity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("div",{staticClass:"warning custom-block"},[a("p",[t._v("You cannot register the same entity twice. It won't throw an exception, but an error will be logged.")])]),t._v(" "),a("h3",{attrs:{id:"destroy-an-entity"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#destroy-an-entity","aria-hidden":"true"}},[t._v("#")]),t._v(" Destroy an Entity")]),t._v(" "),a("p",[t._v("Destroying an Entity from the World will automatically destroy it from all its linked Systems.")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[t._v("world"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("destroyEntity")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("myEntity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"retrieve-and-find-entities"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#retrieve-and-find-entities","aria-hidden":"true"}},[t._v("#")]),t._v(" Retrieve and find Entities")]),t._v(" "),a("p",[t._v("Retrieve the list of all Entities (as ids):")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" entities"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Entity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" world"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getEntities")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("It can also sometimes be handy to filter Entities from a list of components:")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" BombComponent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ActiveComponent "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./components'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" entities"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Entity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" world"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("findEntities")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("BombComponent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ActiveComponent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"get-the-components-linked-to-an-entity"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-the-components-linked-to-an-entity","aria-hidden":"true"}},[t._v("#")]),t._v(" Get the Components linked to an Entity")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" assemblage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Assemblage "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" world"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getComponents")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("myEntity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("div",{staticClass:"tip custom-block"},[a("p",[t._v("Learn more about "),a("a",{attrs:{href:"./assemblage"}},[t._v("Assemblages")]),t._v(".")])]),t._v(" "),a("h3",{attrs:{id:"add-a-component-to-an-entity"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#add-a-component-to-an-entity","aria-hidden":"true"}},[t._v("#")]),t._v(" Add a Component to an Entity")]),t._v(" "),a("p",[t._v("Entities are nothing without attached Component. Adding a Component to an Entity will automatically add this Entity to all relevant Systems (if any).")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" entityA "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" world"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createEntity")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" entityB "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" world"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createEntity")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" originalComponent "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* ... */")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" addedComponentA "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" world"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addComponent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("entityA"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" originalComponent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" addedComponentB "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" world"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addComponent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("entityB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" originalComponent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The returned components are deep copies of the original")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("assert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("originalComponent "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" addedComponentA"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("assert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("originalComponent "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" addedComponentB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("assert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("addedComponentA "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" addedComponentB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("div",{staticClass:"tip custom-block"},[a("p",[t._v("ECS-Machina will always make a deep copy of the Component "),a("em",[t._v("before")]),t._v(' linking it to an Entity. This allows you to reuse the "same" original Component\'s values for multiple Entities, without sharing the same object.')])]),t._v(" "),a("h3",{attrs:{id:"remove-a-component-from-an-entity"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#remove-a-component-from-an-entity","aria-hidden":"true"}},[t._v("#")]),t._v(" Remove a Component from an Entity")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" originalComponent "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* ... */")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" addedComponent "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" world"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addComponent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("myEntity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" originalComponent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nworld"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeComponent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("myEntity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" addedComponent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("div",{staticClass:"warning custom-block"},[a("p",[t._v("Take note, from this example, that the removed component is "),a("code",[t._v("addedComponent")]),t._v(" (and "),a("strong",[t._v("not")]),t._v(" "),a("code",[t._v("originalComponent")]),t._v(")")])]),t._v(" "),a("h2",{attrs:{id:"systems"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#systems","aria-hidden":"true"}},[t._v("#")]),t._v(" Systems")]),t._v(" "),a("h3",{attrs:{id:"register-a-system"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#register-a-system","aria-hidden":"true"}},[t._v("#")]),t._v(" Register a System")]),t._v(" "),a("p",[t._v("You "),a("em",[t._v("must")]),t._v(" register Systems inside your World. An unregistered System simply won't update. Once registered, your new System will automatically link itself to all relevant Entities.")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" mySystem "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MySystem")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nworld"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("registerSystem")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mySystem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("div",{staticClass:"warning custom-block"},[a("p",[t._v("You can only register one (1) instance of each System.")])]),t._v(" "),a("h3",{attrs:{id:"remove-a-system"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#remove-a-system","aria-hidden":"true"}},[t._v("#")]),t._v(" Remove a System")]),t._v(" "),a("p",[t._v("Removing a System will halt its update process. You can always re-register a previously removed System")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[t._v("world"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeSystem")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mySystem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"get-systems"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-systems","aria-hidden":"true"}},[t._v("#")]),t._v(" Get Systems")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Get all registered Systems")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" allSystems"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" System"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" world"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getSystems")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Get the System instance corresponding to a System subclass")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" mySystem "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" world"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("getSystem"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("MySystem"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MySystem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])},[],!1,null,null,null);s.default=e.exports}}]);