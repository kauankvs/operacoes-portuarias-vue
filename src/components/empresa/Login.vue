<script>
export default {
    data() {
        return {
            email: "",
            senha: ""
        }
    }
}
</script>

<template>
    <div class="div-padrao">
        <h2>LOGIN DA EMPRESA</h2>
        <form>
            <div class="div-input">
                <label for="email">Email</label>
                <input v-model="email" type="email" id="email" class="input-padrao" />
            </div>
            <div class="div-input">
                <label for="senha">Senha</label>
                <input v-model="senha" type="password" id="senha" class="input-padrao" />
            </div>
        </form>
    </div>
</template>