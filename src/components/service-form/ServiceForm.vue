<template>
  <div>
    <v-col cols="8">
      <v-card class="mx-auto dg-card">
        <form>
          <v-list-item>
            <v-list-item-content>
              <v-icon large color="green darken-2">mdi-domain</v-icon>
              <v-list-item-title class="headline">Cadastrar Serviço</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-text-field
            v-model="formData.title"
            class="dg-input"
            :error-messages="titleErrors"
            :counter="titleTotalCaracters"
            label="Titulo do Anúncio"
            prepend-icon="mdi-grease-pencil"
            @input="$v.formData.title.$touch()"
            @blur="$v.formData.title.$touch()"
            required
          />

          <v-text-field
            v-model="formData.openingHours"
            class="dg-input"
            label="Descrição de Dias e Horários de Funcionamento"
            prepend-icon="mdi-calendar-clock"
            @input="$v.formData.title.$touch()"
            @blur="$v.formData.title.$touch()"
          />

          <v-file-input
            v-model="formData.imagem"
            class="dg-input"
            accept="image/png, image/jpeg, image/bmp"
            prepend-icon="mdi-camera"
            label="Imagem do Anúncio"
          />

          <v-textarea
            v-model="formData.description"
            class="dg-input"
            outlined
            prepend-icon="mdi-pencil-box-outline"
            name="input-7-4"
            label="Escreva Sobre o Serviço Oferecido"
          />

          <TermsService />

          <v-checkbox
            v-model="formData.checkbox"
            :error-messages="checkboxErrors"
            label="Compreendo e aceito os Termos e Condições."
            @change="$v.formData.checkbox.$touch()"
            @blur="$v.formData.checkbox.$touch()"
            :lazy-validation="true"
            required
          />

          <v-card-actions>
            <v-btn class="mr-4" @click.prevent="submit" color="success">Finalizar</v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </form>
      </v-card>
    </v-col>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate"
import { required, maxLength } from "vuelidate/lib/validators"
import TermsService from "@/components/shared/terms-service/TermsService.vue"
import ServiceProvider from "@/providers/services/service_provider"

export default {
  components: {
    TermsService,
  },
  mixins: [validationMixin],
  validations() {
    return {
      formData: {
        title: {
          required,
          maxLength: maxLength(this.titleTotalCaracters),
        },
        checkbox: {
          checked(value) {
            return value
          },
        },
      },
    }
  },

  data() {
    return {
      titleTotalCaracters: 30,
      formData: {
        title: null,
        description: null,
        imagem: "service03.jpg",
        openingHours: null,
        stars: 4,
        cover: "cover08.jpg"
      },
    }
  },

  computed: {
    checkboxErrors() {
      const errors = []
      const field = this.$v.formData.checkbox
      if (field.$dirty) {
        !field.checked && errors.push("Você Precisa Aceitar os Termos de Uso Para Continuar.")
        return errors;
      }

      return errors
    },
    titleErrors() {
      const errors = []
      const field = this.$v.formData.title

      if (field.$dirty) {
        !field.maxLength && errors.push(`Digite no Máximo ${this.titleTotalCaracters} Caracteres.`)
        !field.required && errors.push("Titulo do Anúncio é Obrigatorio.")
        return errors
      }

      return errors
    },
    isFormValid: () => Object.keys(this.formData).every(field => this.formData[field].valid)
  },
  methods: {
    submit() {
      this.$v.$touch()
      if (this.$v.$anyError === false)
        ServiceProvider.post(this.formData)
    },
  },
}
</script>
<style lang="scss" scoped>
.dg-card {
  padding: 30px
}
.dg-input {
  margin-top: 10px
}
</style>