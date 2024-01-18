

export function formsFetch (url: string) {
    const token = 'Rm9ybUFwaUZlaXRhUGVsb0plYW5QaWVycmVQYXJhYURlc2Vudm9sdmU=';

    return fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token // Se necessário, ajuste conforme a API requer
        }
    })
    .then((response) => {
        if (!response.ok) {
            // Aqui você pode adicionar mais lógica se precisar, como manipulação de diferentes códigos de status
            throw new Error(`Erro na API: ${response.status} ${response.statusText}`);
        }
        return response.json(); // Isso converte e retorna a resposta como JSON em uma etapa
    })
    .catch((error) => {
        // Aqui você pode adicionar mais lógica de tratamento de erro, se necessário
        console.error('Erro na requisição:', error);
        throw error; // É útil relançar o erro se você for tratá-lo mais tarde (por exemplo, em componentes React)
    });
}