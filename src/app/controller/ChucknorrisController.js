const axios = require('axios')

class ChucknorrisController {
    get(request, response) {

        axios.get('https://api.chucknorris.io/jokes/random').then((res) => {

            response.status(200).json({
                "url": res.data.url,
                "frase": res.data.value 
            })
        })
    }
}

module.exports = new ChucknorrisController()
