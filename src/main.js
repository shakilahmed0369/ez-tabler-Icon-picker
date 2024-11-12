import iconList from './icon-list.js'
import IconPicker from './icon-picker.js'

// Create IIFE
const EzIconPicker = (function() {
    // Make them globally available
    window.EzIconPicker = IconPicker;
    window.iconList = iconList;
    
    return {
        IconPicker,
        iconList
    };
})();

export default EzIconPicker;

