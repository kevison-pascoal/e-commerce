class Masks {
  value = "";

  constructor(value) {
    this.value = value;
  }

  set(value) {
    this.value = value;

    return this;
  }

  // 000.000.000-00
  cpf() {
    if (!this.value) {
      return null;
    }

    return this.value
      .replace(/\D/g, "")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})/, "$1-$2")
      .replace(/(-\d{2})\d+?$/, "$1");
  };

  // (00) 00000-0000
  phone() {
    if (!this.value) {
      return null;
    }

    return this.value
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{5})(\d{4})(\d)/, "$1-$2");
  };

  // 00000-000
  cep() {
    if (!this.value) {
      return null;
    }

    return this.value
      .replace(/\D/g, "")
      .replace(/^(\d{5})(\d{3})+?$/, "$1-$2");
  };

  // R$ 0.00
  money() {
    if (!this.value) {
      return null;
    }

    return Number(this.value)
      .toLocaleString('pt-BR', { 
        minimumFractionDigits: 2 , 
        style: 'currency', 
        currency: 'BRL' 
      });
  }
}