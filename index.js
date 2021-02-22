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
            name: '',
            age: '',
            forumID: '',
            email: ''
        }
    },
    methods: {
        checkNums(name) {
            if (name === 'vk') {
                if(this.vkID != '') {
                    nums = parseInt(this.vkID)
                    if (isNaN(nums)) {
                        this.vkID = ''
                        this.errors.push('ID ВКонтакте введен некоректно')
                    }
                }
            } else if (name === 'age') {
                if(this.age != '') {
                    nums = parseInt(this.age)
                    if (isNaN(nums)) {
                        this.age = ''
                        this.errors.push('Возраст введен некоректно')
                    }
                }
            } else {
                if(this.forumID != '') {
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
                    if(this.nickName.includes(' ')) {

                    } else {
                        this.nickName = ''
                        this.errors.push('Ник введено некоректно!')
                    }
                }

            } else {
                if(this.name != '') {
                    if(this.name.includes(' ')) {

                    } else {
                        this.name = ''
                        this.errors.push('Имя введено некоректно!')
                    }
                }

            }
        },
        checkCID() {
            if(this.cid != '') {
                if (this.cid.length > 4) {
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