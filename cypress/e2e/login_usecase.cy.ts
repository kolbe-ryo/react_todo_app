
/// <reference types="cypress" />

import { before } from "mocha";

describe('認証関連のユースケース', () => {

    let email: string;
    let password: string;

    before(() => {
        cy.fixture("user.json").then(loginInfo => {
            email = loginInfo.email;
            password = loginInfo.password;
        });
    });

    it('ログイン可能であること', function () {

        cy.visit('/login');

        // inputにemailとpasswordを入力        
        cy.get('input[name=email]').type(email);
        cy.get('input[name=password]').type(password);

        // SignInボタンをクリック
        cy.get("button[type='submit']").click();

        // cypressで'/'トップ画面が表示されていることを確認
        cy.url().should('include', '/');

    });

    it('ログアウト可能であること', function () {

        cy.visit('/login');

        // inputにemailとpasswordを入力        
        cy.get('input[name=email]').type(email);
        cy.get('input[name=password]').type(password);

        // SignInボタンをクリック
        cy.get("button[type='submit']").click();

        // cypressで'/'トップ画面が表示されていることを確認
        cy.url().should('include', '/');

        // ログアウトボタンをクリック
        cy.get('[data-testid="logout"]').click();

        // cypressで'/login'ログイン画面が表示されていることを確認
        cy.url().should('include', '/login');
    });
});