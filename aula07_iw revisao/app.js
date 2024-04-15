function banco() {
const dados = [
                 {
                    id:1,
                    login:"ringo",
                    senha:"1234",
                    email:"ringo@gmail.com"
                },
                 {
                    id:2,
                    login:"paul",
                    senha:"1221",
                    email:"paul@gmail.com"
                },
                 {
                    id:3,
                    login:"john",
                    senha:"3434",
                    email:"john@gmail.com"
                },
              ]
    // tornar o vetor em JSON("texto" ou forma de transferir dados entre sistemas computacionais).
    const ds = JSON.stringify(dados)

    // localStorage(disco local ou armazenamento local), onde colocamos um item/setItem com a palavra-chave "bd", que é ds.
    localStorage.setItem("bd", ds)

    return ds
}

function converte(){

     // converte a variável ds, que tem o vetor dados, de volta para vetor em vez de JSON
     const ds = JSON.parse(localStorage.getItem("bd"))
     localStorage.removeItem("bd")
     
     //adicionando essa linha no vetor.
     let t = { id:4,login:"will",senha:"3456",email:"will@gmail.com"}
     ds.push(t)

     //variável com os dados já convertidos, convertendo novamente em JSON.
     const json = JSON.stringify(ds)

     localStorage.setItem("bd", json)

}

function ola(){
        alert("Olá mundo!")
}