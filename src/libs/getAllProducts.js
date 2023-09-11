export async function getAllProducts(){
    let result = await fetch('https://64c9d9cbb2980cec85c279c3.mockapi.io/all_products');
    return result.json();
}