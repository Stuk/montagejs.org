var Montage=require("montage").Montage,Uuid=require("core/uuid").Uuid,logger=require("core/logger").logger("transaction-id"),_lastTimestamp=Date.now(),_lastNanos=1,_transactionManagerInstance=null,TransactionId=exports.TransactionId=Montage.create(Montage,{_mappingFolderName:{serializable:!0,enumerable:!1,value:""},mappingFolderName:{get:function(){return this._mappingFolderName}},_uuid:{serializable:!0,enumerable:!1,value:null},_timestamp:{serializable:!0,enumerable:!1,value:null},_nanos:{serializable:!0,enumerable:!1,value:null},initWithMappingSetName:{serializable:!1,enumerable:!1,value:function(e){this._mappingFolderName=e,this._uuid=Uuid.generate();var t=Date.now();return _lastTimestamp===t?_lastNanos+=1:(_lastTimestamp=t,_lastNanos=1),this._timestamp=_lastTimestamp,this._nanos=_lastNanos,logger.isDebug&&logger.debug(this,"New Transaction ID: "+this._timestamp),this}},factory:{value:function(){return this.factory.delegate&&typeof this.factory.delegate.createTransactionId=="function"?this.factory.delegate.createTransactionId():TransactionId.create().init()}},before:{value:function(e){return this._timestamp===e._timestamp?this._nanos<e._nanos:this._timestamp<e._timestamp}},after:{value:function(e){return this._timestamp===e._timestamp?this._nanos>e._nanos:this._timestamp>e._timestamp}},manager:{get:function(){return _transactionManagerInstance===null&&(_transactionManagerInstance=TransactionManager.create().init()),_transactionManagerInstance}}}),TransactionManager=exports.TransactionManager=Montage.create(Montage,{_currentTransaction:{serializable:!1,enumerable:!1,value:null},traceTransactionStart:{serializable:!1,enumerable:!1,value:!1},init:{serializable:!1,enumerable:!1,value:function(){return this}},startTransaction:{value:function(e){if(this._currentTransaction)throw new Error("Transaction Open: "+JSON.stringify(this._currentTransaction));return this._currentTransaction=TransactionId.create().initWithMappingSetName(e),this._currentTransaction}},currentTransaction:{value:function(){return this._currentTransaction}},hasCurrentTransaction:{value:function(){return this._currentTransaction!=null}},openTransaction:{value:function(e){if(this._currentTransaction)throw new Error("Transaction Open: "+JSON.stringify(this._currentTransaction));return this._currentTransaction=e,this._currentTransaction}},closeTransaction:{value:function(e){if(this._currentTransaction!==e)throw new Error("Transaction Not Open: "+JSON.stringify(this._currentTransaction));return this._currentTransaction=null,this._currentTransaction}}})