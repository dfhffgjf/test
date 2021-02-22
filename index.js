document.querySelectorAll('.anim').forEach((el) => {
    setTimeout(() => {
        el.classList.add('active');
    }, 500)
});


document.querySelectorAll('.inpAnim').forEach((el) => {
    el.addEventListener('focus', () => {
        el.classList.add('active')
    })
    el.addEventListener('blur', () => {
        el.classList.remove('active')
    })
})

Vue.createApp({

    data() {
        return {
            errors: [],
            nickName: '',
            cid: '',
            vkID: '',
            nameUser: '',
            age: '',
            forumID: '',
            email: ''
        }
    },
    methods: {
        checkNums(name) {
            if (name === 'vk') {
                if(this.vkID != '') {
                    this.vkID = this.vkID.replace(' ', '')
                    nums = parseInt(this.vkID)
                    if (isNaN(nums)) {
                        this.vkID = ''
                        this.errors.push('ID ВКонтакте введен некоректно')
                    }
                }
            } else if (name === 'age') {
                if(this.age != '') {
                    this.age = this.age.replace(' ', '')
                    nums = parseInt(this.age)
                    if (isNaN(nums)) {
                        this.age = ''
                        this.errors.push('Возраст введен некоректно')
                    }
                }
            } else {
                if(this.forumID != '') {
                    this.forumID = this.forumID.replace(' ', '')
                    nums = parseInt(this.forumID)
                    if (isNaN(nums)) {
                        this.forumID = ''
                        this.errors.push('Форумный ID введен некоректно!')
                    }
                }

            }
        },
        checkMail() {
            if(this.email != '') {
                var regexp = /[а-яё]/i;
                if (regexp.test(this.email)) {
                    this.errors.push('E-mail введен некоректно regexp!')
                    this.email = ''
                    return;
                }
                this.email = this.email.replace(' ', '')
                if(this.email.includes('@')) {
                    if(this.email.includes('.')) {

                    } else {
                        this.errors.push('E-mail введен некоректно!')
                        this.email = ''
                    }
                } else {
                    this.errors.push('E-mail введен некоректно!')
                    this.email = ''
                }
            }

        },
        checkName(nickName = true) {
            if (nickName) {
                if(this.nickName != '') {
                    this.nickName = this.nickName.trim()
                    var regexp = /[а-яё]/i;
                    if(this.nickName.includes(' ')) {
                        if (regexp.test(this.nickName)) {
                            this.nickName = ''
                            this.errors.push('Ник введено некоректно!')
                        }
                    } else {
                        this.name = this.name.trim()
                        this.nickName = ''
                        this.errors.push('Ник введено некоректно!')
                    }
                }

            } else {
                if(this.nameUser != '') {
                    this.nameUser = this.nameUser.trim()
                    if(this.nameUser.includes(' ')) {

                    } else {
                        this.nameUser = ''
                        this.errors.push('Имя введено некоректно!')
                    }
                }

            }
        },
        checkCID() {
            if(this.cid != '') {
                this.cid = this.cid.replace(' ', '')
                var regexp = /[а-яё]/i;
                if (this.cid.length > 4 || regexp.test(this.cid)) {
                    this.errors.push('CID введено некоректно!')
                    this.cid = ''
                }
            }
        }
    },
    mounted() {
        console.log('Hello!')
    }

}).mount('#app')