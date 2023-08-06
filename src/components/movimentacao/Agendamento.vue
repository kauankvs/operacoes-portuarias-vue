<script>
export default {
    data() {
        return {
            numero: "",
            tipo: "",
            inicio: new Date('01/01/0001'),
            fim: new Date('01/01/0001'),
        }
    }
}
</script>

<template>
    <div class="div-padrao">
        <h2>AGENDAMENTO DE MOVIMENTAÇÃO</h2>
        <form>
            <div class="div-input input-w">
                <label>Número de Container</label>
                <input v-model="numero" type="text" id="numero" class="input-padrao data" />
            </div>
            <div class="div-input input-w">
                <label>Tipo</label>
                <select v-model="tipo" class="input-padrao data">
                    <option value="embarque">Embarque</option>
                    <option value="descarga">Descarga</option>
                    <option value="gateIn">Gate In</option>
                    <option value="gateOut">Gate Out</option>
                    <option value="reposicionamento">Reposicionamento</option>
                    <option value="pesagem">Pesagem</option>
                    <option value="scanner">Scanner</option>
                </select>
            </div>
            <div class="div-input input-w">
                <label>Início</label>
                <input v-model="inicio" type="date" class="input-padrao data" />
            </div>
            <div class="div-input input-w">
                <label>Fim</label>
                <input v-model="fim" type="date" class="input-padrao data" />
            </div>
        </form>
    </div>
</template>

<style scoped>
    .input-w {
        width: 50%;
    }

    .data {
        font-family: Arial, Helvetica, sans-serif;
        letter-spacing: 0.17em;
        text-align: center;
    }
</style>