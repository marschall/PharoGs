set compile_env: 2

category: 'initialization'
classmethod: MethodDictionary
compactAllInstances

    <PharoGsError>
    self @env0:error: 'Not implemented in GemStone'
%

category: 'instance creation'
classmethod: MethodDictionary
new

    <PharoGsDone>
    ^self @env0:new
%

category: 'instance creation'
classmethod: MethodDictionary
new: numberOfElements

    <PharoGsDone>
    ^self @env0:new: numberOfElements
%

category: 'instance creation'
classmethod: MethodDictionary
newForCapacity: capacity

    <PharoGsDone>
    ^self @env0:new: capacity
%

category: 'sizing'
classmethod: MethodDictionary
sizeFor: numberOfElements

    <PharoGsError>
    self @env0:error: 'Not implemented in GemStone'
%

category: 'accessing'
method: MethodDictionary
add: anAssociation

    <PharoGsDone>
    ^self @env0:at: anAssociation key put: anAssociation value
%

category: 'accessing'
method: MethodDictionary
associationAt: key ifAbsent: aBlock

    <PharoGsError>
    self @env0:error: 'Not implemented in GemStone'
%

category: 'enumeration'
method: MethodDictionary
associationsDo: aBlock

    <PharoGsDone>
    ^self @env0:associationsAsArray do: aBlock
%

category: 'accessing'
method: MethodDictionary
at: key ifAbsent: aBlock

    <PharoGsDone>
    ^self @env0:at: key ifAbsent: [aBlock @env2:valuea]
%

category: 'accessing'
method: MethodDictionary
at: key ifPresent: aBlock

    <PharoGsDone>
    ^aBlock cull: (self @env0:at: key ifAbsent: [^nil])
%

category: 'accessing'
method: MethodDictionary
at: key put: value

    <PharoGsDone>
    ^self @env0:at: key put: value
%

category: 'private'
method: MethodDictionary
compact

    <PharoGsDone>
    ^self @env0:_rebuild
%

category: 'private'
method: MethodDictionary
compactWithoutBecome

    <PharoGsDone>
    ^self @env0:_rebuild
%

category: 'private'
method: MethodDictionary
fixCollisionsFrom: start

    <PharoGsError>
    self @env0:error: 'Not implemented in GemStone'
%

category: 'private'
method: MethodDictionary
grow

    <PharoGsDone>
    ^self @env0:rebuildIfNeeded
%

category: 'testing'
method: MethodDictionary
isHealthy

    <PharoGsDone>
    ^true
%

category: 'accessing'
method: MethodDictionary
keyAtIdentityValue: value ifAbsent: exceptionBlock

    <PharoGsDone>
    ^self @env0:keyAtValue: value ifAbsent: [exceptionBlock @env2:value]
%

category: 'accessing'
method: MethodDictionary
keyAtValue: value ifAbsent: exceptionBlock

    <PharoGsDone>
    ^self @env0:keyAtValue: value ifAbsent: [exceptionBlock @env2:value]
%

category: 'accessing'
method: MethodDictionary
keys

    <PharoGsDone>
    ^IdentitySet withAll: self @env0:keys @env0:asArray
%

category: 'enumeration'
method: MethodDictionary
keysAndValuesDo: aBlock

    <PharoGsDone>
    ^self @env0:keysAndValuesDo: [:eachKey :eachValue | 
        aBlock @env2:value: eachKey value: eachValue.
    ]
%

category: 'enumeration'
method: MethodDictionary
keysDo: aBlock

    <PharoGsDone>
    ^self @env0:keysDo: [:each | 
        aBlock @env2:value: each
    ]
%

category: 'copying'
method: MethodDictionary
postCopy

    <PharoGsDone>
    ^self @env0:postCopy
%

category: 'private'
method: MethodDictionary
rehash

    <PharoGsDone>
    ^self @env0:_rebuild
%

category: 'removing'
method: MethodDictionary
removeAll

    <PharoGsDone>
    ^self @env0:removeAll
%

category: 'private'
method: MethodDictionary
removeDangerouslyKey: key ifAbsent: aBlock

    <PharoGsDone>
    ^self @env0:removeKey: key ifAbsent: [aBlock @env2:value]
%

category: 'removing'
method: MethodDictionary
removeKey: key ifAbsent: errorBlock

    <PharoGsDone>
    ^self @env0:removeKey: key ifAbsent: [errorBlock @env2:value]
%

category: 'private'
method: MethodDictionary
scanFor: anObject

    <PharoGsError>
    self @env0:error: 'Not implemented in GemStone'
%

category: 'private'
method: MethodDictionary
swap: oneIndex with: otherIndex

    <PharoGsError>
    self @env0:error: 'Not implemented in GemStone'
%

category: 'enumeration'
method: MethodDictionary
valuesDo: aBlock

    <PharoGsDone>
    ^self @env0:valuesDo: [:each | aBlock @env2:value: each]
%

category: '*Reflectivity'
method: MethodDictionary
metaLinkOptions 

	<PharoGsDone> 
	^{ 
	#scanFor: -> #(  #+ optionCompileOnLinkInstallation). 
	#at:put: -> #(  #+ optionCompileOnLinkInstallation). 
	#metaLinkOptions -> #(  #+ optionCompileOnLinkInstallation) 
	}
%

set compile_env: 0
