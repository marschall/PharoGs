set compile_env: 2

category: 'math functions'
classmethod: BoxedFloat64
basicNew: sizeRequested  
	"Primitive. Answer an instance of this class with the number 
	 of indexable variables specified by the argument, sizeRequested. 
	 Fail if this class is not indexable or if the argument is not a 
	 positive Integer, or if there is not enough memory available.  
	 Essential. See Object documentation whatIsAPrimitive." 

    <PharoGs>
    ^self @env0:_basicNew: sizeRequested
%

category: 'arithmetic'
method: BoxedFloat64
* aNumber  
	"Primitive. Answer the result of multiplying the receiver by aNumber. 
	Fail if the argument is not a Float. Essential. See Object documentation 
	whatIsAPrimitive." 

    <primitive: 102>
    <PharoGs>
    ^self @env0:* aNumber
%

category: 'arithmetic'
method: BoxedFloat64
+ aNumber  
	"Primitive. Answer the sum of the receiver and aNumber. Essential. 
	Fail if the argument is not a Float. See Object documentation 
	whatIsAPrimitive." 

    <primitive: 106>
    <PharoGs>
    ^self @env0:+ aNumber
%

category: 'arithmetic'
method: BoxedFloat64
- aNumber  
	"Primitive. Answer the difference between the receiver and aNumber. 
	Fail if the argument is not a Float. Essential. See Object documentation 
	whatIsAPrimitive." 

    <primitive: 107>
    <PharoGs>
    ^self @env0:- aNumber
%

category: 'arithmetic'
method: BoxedFloat64
/ aNumber  
	"Primitive. Answer the result of dividing receiver by aNumber. 
	Fail if the argument is not a Float. Essential. See Object documentation 
	whatIsAPrimitive." 

    <primitive: 108>
    <PharoGs>
    ^self @env0:/ aNumber
%

category: 'comparing'
method: BoxedFloat64
< aNumber  
	"Primitive. Compare the receiver with the argument and return true 
	if the receiver is less than the argument. Otherwise return false. 
	Fail if the argument is not a Float. Essential. See Object documentation 
	whatIsAPrimitive." 

    <primitive: 118>
    <PharoGs>
    ^self @env0:< aNumber
%

category: 'comparing'
method: BoxedFloat64
<= aNumber  
	"Primitive. Compare the receiver with the argument and return true 
	if the receiver is less than or equal to the argument. Otherwise return 
	false. Fail if the argument is not a Float. Optional. See Object 
	documentation whatIsAPrimitive." 

    <primitive: 121>
    <PharoGs>
    ^self @env0:< aNumber
%

category: 'comparing'
method: BoxedFloat64
= aNumber  
	"Primitive. Compare the receiver with the argument and return true 
	if the receiver is equal to the argument. Otherwise return false. 
	Fail if the argument is not a Float. Essential. See Object documentation 
	whatIsAPrimitive." 

    <primitive: 119>
    <PharoGs>
    ^self @env0:< aNumber
%

category: 'comparing'
method: BoxedFloat64
> aNumber  
	"Primitive. Compare the receiver with the argument and return true 
	if the receiver is greater than the argument. Otherwise return false. 
	Fail if the argument is not a Float. Essential. See Object documentation 
	whatIsAPrimitive." 

    <PharoGs>
    ^aNumber < self
%

category: 'comparing'
method: BoxedFloat64
>= aNumber  
	"Primitive. Compare the receiver with the argument and return true 
	if the receiver is greater than or equal to the argument. Otherwise return 
	false. Fail if the argument is not a Float. Optional. See Object documentation  
	whatIsAPrimitive. " 

    <PharoGs>
    ^aNumber <= self
%

category: 'math functions'
method: BoxedFloat64
arcTan 
	"Answer the angle in radians. 
	 Optional. See Object documentation whatIsAPrimitive." 

    <PharoGs>
    ^self @env0:_mathPrim: 4
%

category: 'math functions'
method: BoxedFloat64
exp 
	"Answer E raised to the receiver power. 
	 Optional. See Object documentation whatIsAPrimitive."  

    <PharoGs>
    ^self @env0:_mathPrim: 0
%

category: 'math functions'
method: BoxedFloat64
exponent 
	"Primitive. Consider the receiver to be represented as a power of two 
	multiplied by a mantissa (between one and two). Answer with the 
	SmallInteger to whose power two is raised. Optional. See Object 
	documentation whatIsAPrimitive." 

    <PharoGs>
    ^self @env0:_mathPrim: 28
%

category: 'truncation and round off'
method: BoxedFloat64
fractionPart 
	"Primitive. Answer a Float whose value is the difference between the  
	receiver and the receiver's asInteger value. Optional. See Object   '
	documentation whatIsAPrimitive." 

    <PharoGs>
	^self - self truncated asFloat
%

category: 'math functions'
method: BoxedFloat64
ln 
	"Answer the natural logarithm of the receiver. 
	 Optional. See Object documentation whatIsAPrimitive." 

    <PharoGs>
    ^self @env0:_mathPrim: 7
%

category: 'math functions'
method: BoxedFloat64
sin 
	"Answer the sine of the receiver taken as an angle in radians. 
	 Optional. See Object documentation whatIsAPrimitive." 

    <PharoGs>
    ^self @env0:_mathPrim: 2
%

category: 'math functions'
method: BoxedFloat64
sin 
	"Answer the sine of the receiver taken as an angle in radians. 
	 Optional. See Object documentation whatIsAPrimitive." 

    <PharoGs>
    ^self @env0:_mathPrim: 2
%

category: 'accessing'
method: BoxedFloat64
size 
	"variableWordSubclass" 

    <PharoGs>
    ^2
%

category: 'math functions'
method: BoxedFloat64
timesTwoPower: anInteger  
	"Primitive. Answer with the receiver multiplied by 2.0 raised 
	to the power of the argument. 
	Optional. See Object documentation whatIsAPrimitive." 

    <PharoGs>
	anInteger < -29 ifTrue: [^ self * (2.0 raisedToInteger: anInteger)]. 
	anInteger < 0 ifTrue: [^ self / (1 bitShift: (0 - anInteger)) asFloat]. 
	anInteger < 30 ifTrue: [^ self * (1 bitShift: anInteger) asFloat]. 
	^ self * (2.0 raisedToInteger: anInteger)
%

category: 'truncation and round off'
method: BoxedFloat64
truncated 
	"Answer with a SmallInteger equal to the value of the receiver without  
	its fractional part. The primitive fails if the truncated value cannot be  
	represented as a SmallInteger. In that case, the code below will compute  
	a LargeInteger truncated value. 
	Essential. See Object documentation whatIsAPrimitive. " 

    <PharoGs>
    ^self @env0:_truncated: true
%

category: 'math functions'
method: BoxedFloat64
~= aNumber  
	"Primitive. Compare the receiver with the argument and return true 
	if the receiver is not equal to the argument. Otherwise return false. 
	Fail if the argument is not a Float. Optional. See Object documentation 
	whatIsAPrimitive." 

    <primitive: 177>
    <PharoGs>
    ^self @env0:~= aNumber
%

set compile_env: 0
