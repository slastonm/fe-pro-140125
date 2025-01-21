let productItem = 'milk';
// milk === Milk false

switch(productItem){
    case 'orange':
        console.log(`Orange cost 1$`);
        break;
    case 'Milk':
    case 'milk':
        console.log('Milk cost 1.25$');
        break;
    default:
        console.log(`Any price information about ${productItem}`);
}

// DRY don't repeat yourself