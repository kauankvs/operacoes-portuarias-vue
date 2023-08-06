<script>
export default {
    data() {
        return {
            nome: "",
            rua: "",
            numero: "",
            complemento: "",
            email: "",
            senha: ""
        }
    }
}
</script>

<template>
    <div class="div-padrao">
        <h2>CADASTRO DA EMPRESA</h2>
        <form>
            <div class="div-input div-cadastro">
                <label for="nome">Name</label>
                <input v-model="nome" type="text" id="nome" class="input-padrao" />
            </div>
            <div class="div-input div-cadastro">
                <label for="rua">Rua</label>
                <input v-model="rua" type="text" id="rua" class="input-padrao" />
            </div>
            <div class="div-input div-cadastro">
                <label for="numero">Número</label>
                <input v-model="numero" type="text" id="numero" class="input-padrao" />
            </div>
            <div class="div-input div-cadastro">
                <label for="complemento">Complemento</label>
                <input v-model="complemento" type="text" id="complemento" class="input-padrao" />
            </div>
            <div class="div-input div-cadastro">
                <label for="email">Email</label>
                <input v-model="email" type="email" id="email" class="input-padrao" />
            </div>
            <div class="div-input div-cadastro">
                <label for="senha">Senha</label>
                <input v-model="senha" type="password" id="senha" class="input-padrao" />
            </div>
        </form>
    </div>
</template>

<style scoped>
    .div-cadastro {
        width: 50%;
    }
</style>