const fetch = require('node-fetch')

exports.getItemsDetail = (req, res) => {
    const id = req.params.uniqueID
    const url = `https://simple.ripley.cl/api/v2/products/by-id/${id}`
    fetch(url)
    .then((response)=> response.json())
    .then(data => {
        res.send({
            picture: data.fullImage,
            name: data.name,
            sku: data.partNumber,
            offer: data.prices.formattedOfferPrice,
            ripleyOffer: data.prices.formattedCardPrice,
            fullPrice: data.prices.formattedListPrice,
            puntos: data.prices.ripleyPuntos,
            discount: data.prices.discountPercentage,
            marca: data.attributes.find(attr => attr.name === 'Marca').value,
        })
    })
    .catch(err => console.log(err))
}