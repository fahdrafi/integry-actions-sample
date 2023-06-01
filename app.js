new Vue({
  el: '#app',
  data: {
      newContact: {
          name: '',
          email: ''
      },
      contacts: [],
      selectAll: false
  },
  computed: {
      selectedContacts() {
          return this.contacts.filter(contact => contact.selected);
      }
  },
  methods: {
      addContact() {
          if (this.newContact.name && this.newContact.email) {
              this.contacts.push({
                  name: this.newContact.name,
                  email: this.newContact.email,
                  selected: false
              });
              this.newContact.name = '';
              this.newContact.email = '';
          }
      },
      deleteSelected() {
          this.contacts = this.contacts.filter(contact => !contact.selected);
          this.selectAll = false;
      },
      toggleAll() {
          this.contacts.forEach(contact => contact.selected = this.selectAll);
      }
  }
})
