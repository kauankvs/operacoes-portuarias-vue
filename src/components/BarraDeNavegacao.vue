<template>
    <div>
        <nav class="barra">
            <div class="div-principal">
                <router-link to="/" class="nome-principal">OPERAÇÕES PORTUÁRIAS</router-link>
            </div>
            <div class="div-navegador">
                <router-link to="/empresa" class="navegador">EMPRESA</router-link>
                <router-link to="/container" class="navegador">CONTAINER</router-link>
                <router-link to="/movimentacao" class="navegador">MOVIMENTAÇÃO</router-link>

            </div>
        </nav>
    </div>
</template>

<style scoped>

.barra {
    display: flex;
    background-color: #52796f;
    font-family: Arial, Helvetica, sans-serif;
    min-height: 50px;
    justify-content: space-between;
    align-items: center;
    padding: 7px;
}

.div-navegador {
    width: 50%;
    display: flex;
    justify-content: space-around;
}

.navegador {
    text-decoration: none;
    display: inline;
    font-size: 1rem;
    letter-spacing: 0.20em;
    color: #2638348a;
    text-shadow: 0.5px 0.5px 1px #344d478a;
}

.navegador:hover {
    filter: opacity(75%)
}

.navegador:active {
    filter: opacity(50%)
}

.nome-principal {
    text-decoration: none;
    font-size: 1.6rem;
    font-size: 1.5rem;
    letter-spacing: 0.20em;
    color: #2638348a;
    text-shadow: 0.5px 0.5px 1px #344d478a;
    padding: 10px 0 0 10px;
}

</style>