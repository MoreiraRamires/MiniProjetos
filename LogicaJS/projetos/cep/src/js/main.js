const cep = document.querySelector('#cep');






//blur =>( quando eu perco o foco )=> assim que a pessoa sair do campo cep aparece
cep.addEventListener('blur', (e)=>{
    console.log(cep.value)

    let serach = cep.value.replace('-','');
    const options = {
        method:'GET',
        mode:'cors',
        cache:'default'
    }

    //consulta a API 
    fetch(`https://viacep.com.br/ws/${serach}/json/`, options)
        .then(response=>{
            response.json()
                .then( data => showData(data))
                .catch()
            
        })
        .catch( 
            e => console.log('Deu Erro:'+ e.message)
        )
    })
// exibir apenas campos existentes

    const showData = (result)=> {
        for( const campo in result ){
            if(document.querySelector('#'+campo)){
                document.querySelector('#'+campo).value = result[campo]
            }
        }
    
    }

