var AppConstants = require('../constants/app-constants');
var AppDispatcher = require('../dispatchers/app-dispatcher');

var AppActions = {
    addItem: function(item){
        AppDispatcher.handleViewAction({
            actionType: AppConstants.ADD_ITEM,
            item: item
        })
    },
    removeItem: function(index){
        AppDispatcher.handleViewAction({
            actionType: AppConstants.REMOVE_ITEM,
            index: index
        })
    },
    IncreaseItem: function(index){
        AppDispatcher.handleViewAction({
            actionType: AppConstants.INCREASE_ITEM,
            index: index
        })
    },
    DecreaseItem: function(index){
        AppDispatcher.handleViewAction({
            actionType: AppConstants.DECREASE_ITEM,
            index: index
        })
    }
}

module.exports = AppActions;