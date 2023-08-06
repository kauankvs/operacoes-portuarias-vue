<script>
export default {
    data() {
        return {
            numero: "",
            tipo: -1,
            status: "",
            categoria: ""
        }
    }
}
</script>

<template>
    <div class="div-padrao">
        <h2>REGISTRO DE CONTAINER</h2>
        <form>
            <div class="div-input">
                <label>Número de Container</label>
                <input v-model="numero" type="text" id="numero" class="input-padrao" />
            </div>
            <div class="div-input div-opt">
                <label>Tipo</label>
                <select v-model="tipo" class="input-padrao">
                    <option value="20">20</option>
                    <option value="40">40</option>
                </select>
            </div>
            <div class="div-input div-opt">
                <label>Status</label>
                <select v-model="status" class="input-padrao">
                    <option value="vazio">Vazio</option>
                    <option value="cheio">Cheio</option>
                </select>
            </div>
            <div class="div-input div-opt">
                <label for="numero">Categoria</label>
                <select v-model="categoria" class="input-padrao">
                    <option value="importacao">Importação</option>
                    <option value="exportacao">Exportação</option>
                </select>
            </div>
        </form>
    </div>
</template>

<style scoped>
    .div-opt {
        width: 50%;
    }
</style>