Feature: Avaliar o painel de indicadores

  Scenario: Avaliar inflação IPCA
    Given Que eu esteja na página dos indicadores
    When Eu olhar o valor da inflação IPCA Mensal abaixo do icone
    And Comparar com o valor IPCA da tabela
    Then Os valores devem ser iguais

  Scenario: Avaliar inflação INPC
    Given Que eu esteja na página dos indicadores
    When Eu olhar o valor da inflação INPC abaixo do icone
    And Comparar com o valor INPC da tabela
    Then Os valores devem ser iguais

  Scenario: Avaliar a variação do PIB
    Given Que eu esteja na página dos indicadores
    When Eu olhar a variação do PIB abaixo do icone
    And Comparar com o valor do PIB da tabela
    Then Os valores devem ser iguais
