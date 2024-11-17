describe('The Home Page', () => {

    let email: string;
    let password: string;

    // const login = (email, password) => {
    //     cy.session('userSession', () => {
    //         cy.visit('/login')
    //         cy.get('input[name=email]').type(email)
    //         cy.get('input[name=password]').type(password)
    //         cy.get("button[type='submit']").click()
    //         cy.url().should('contain', '/')
    //     })
    // };

    // 事前にログインしておく
    before(() => {
        cy.fixture("user.json").then(loginInfo => {
            // 認証情報を取得
            email = loginInfo.email;
            password = loginInfo.password;
        });
    });

    beforeEach(() => {
        cy.login(email, password)
        cy.visit('/')
    });

    it('successfully loads', () => {
        Cypress.session.getCurrentSessionData()
        // トップページのテキストを確認
        cy.contains('h3', 'タスクを管理するアプリ').should('be.visible')
    })
})