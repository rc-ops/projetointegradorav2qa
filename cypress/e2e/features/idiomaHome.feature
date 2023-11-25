Feature:

  Scenario: Mudar idioma da página para inglês
    Given Eu esteja na página inicial e com o idioma em português
    When Eu clicar na bandeira de inglês
    Then O idioma da página deve mudar para inglês

  Scenario: Mudar idioma da página de volta para português
    Given Eu esteja na página inicial e com o idioma em inglês
    When Eu clicar na bandeira do brasil
    Then O idioma da página deve mudar para português
