export const questions = {
  results: [
    {
      id: "1",
      image: "",
      category: "MOTOCICLISTAS",
      correct_answer:
        "Não existe índice máximo de álcool no organismo, o motorista pode beber à vontade e dirigir logo em seguida.",
      incorrect_answers: ["2%", "10%", "15%"],
      question:
        "Quando o motorista é parado para realizar o teste de bafômetro, qual é o índice de álcool no organismo aceitável?",
      type: "multiple",
      justification:
        "Segundo o Art. 165 do Código Brasileiro de Trânsito, dirigir sob qualquer índice de álcool no organismo é infração gravíssima, que ocasiona multa de cerca de 3 mil reais, suspensão do direito de dirigir, recolhimento do documento de habilitação e retenção do veículo.",
    },
    {
      id: "2",
      category: "MOTOCICLISTAS",
      image: "",
      type: "multiple",
      question:
        "É permitido participar de corridas não autorizadas pela autoridade competente em vias públicas?",
      correct_answer: "Não",
      incorrect_answers: [
        "Sim",
        "Desde que use capacete",
        "Desde que a velocidade não passe de 200km/h",
      ],
    },
    {
      id: "3",
      category: "MOTOCICLISTAS",
      image: "",
      type: "multiple",
      question:
        "Quando surgir a necessidade de o motociclista trafegar ao lado dos demais veículos da via, qual lado deve ser evitado?",
      justification:
        "O motociclista deve evitar trafegar do lado direito dos demais veículos, pois os motoristas não têm o hábito de usar o retrovisor da direita.",
      correct_answer: "Direito",
      incorrect_answers: ["Esquerdo", "O lado não faz diferença"],
    },
    {
      id: "4",
      category: "MOTOCICLISTAS",
      image:
        "https://img.vixdata.io/pd/webp-large/pt/sites/default/files/bdm/decarona/2013/11/sinal-amarelo-o-que-fazer-02.jpg",
      type: "multiple",
      question: "O que significa o sinal amarelo do semáforo?",
      justification:
        "O sinal amarelo do semáforo significa que é preciso estar atento à breve mudança no sinal que se seguirá.",
      correct_answer:
        "É preciso estar atento a breve mudança no sinal que se seguirá",
      incorrect_answers: ["Siga em frente", "Acelere", "Pare imediatamente"],
    },
    {
      id: "5",
      category: "MOTOCICLISTAS",
      type: "multiple",
      image: "",
      question:
        "Conduzir motocicleta sem usar capacete de segurança é infração...",
      justification:
        "Segundo o Art. 244 do Código de Trânsito Brasileiro, conduzir motocicleta sem capacete de segurança é infração gravíssima, que ocasiona multa de 293,47 reais, suspensão do direito de dirigir e recolhimento do documento de habilitação.",
      correct_answer: "Gravíssima",
      incorrect_answers: ["Leve", "Média", "Grave", "Não é infração"],
    },
    {
      id: "6",
      category: "CICLISTAS",
      type: "multiple",
      image: "",
      question: "Preferencialmente, por onde o ciclista deve trafegar?",
      justification:
        "Ciclistas devem trafegar, preferencialmente, em faixas exclusivas (ciclovias).",
      correct_answer: "Ciclovias",
      incorrect_answers: [
        "Calçada",
        "Corredor de trânsito",
        "Em cima dos carros",
      ],
    },
    {
      id: "7",
      category: "CICLISTAS",
      type: "multiple",
      image:
        "https://cdn.awsli.com.br/600x450/1012/1012749/produto/37775688/dd29d9d6f8.jpg",
      question: "Qual é o significado desta placa?",
      justification: "O significado da placa é “Ciclista, transite à direita”.",
      correct_answer: "Ciclista, transite à direita",
      incorrect_answers: [
        "Ciclista, transite à esquerda",
        "Ciclista, vire à direita",
      ],
    },
    {
      id: "8",
      category: "CICLISTAS",
      type: "multiple",
      image:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABAlBMVEX////QHycAAADQHibQGiPLAADQFyHQGyRISEj29vbMAADMAAbv7+/8/PzNAAv5+fnNABLR0dHo6OixsbHPCxg9PT3MzMzb29tzc3PPEh1ra2sxMTFkZGRbW1ugoKDh4eEmJiaSkpK9vb19fX0LCwvu0M368vGGhoasrKzFISbqwb/x2dcdHR2bm5u5ubkUFBT46+rPTUzQVFTOQEPOUFHNMzXVaWrbhoVRUVE3NzfsysnRXF3Ye3nhpqXmtLTdlZPagX8yAADNODusICRADxLgnZvXdHHTZWK9NjimAACsICbaXmAzDRApAAAnLy8ADw89AwUeFxjYw8EhAABHICKxoJ6g0HQMAAAWnUlEQVR4nNVdi1viSLYHKw81kkSNYtQWRRMb0rYgIoq8Bhfc3Zm9c/dx//9/5eYJeZyTqoQQe89833Q3YlK/qvM+p6oqlXKoppgdy2i3Jza120PD6phKraR3b5eUjjUcT0dPc1HmeUlWVdkmid/nebXa+302nRgd86vHmJtMqz1ddluqrGq6wBFSjRIROUHXVEntv4/GRuerR5uVOu3pe1+TbWhiCFkCpfshp+uq2uqOJtZXj5qVzPZgrqkasGwpJAqarPZHk1+eZRVr8czLGudjY4MYzIS9mjL/NLZ+XQ1UswY9SdUZcSFoBVV6Xvya/GpNu/bibQAuBFJ/n/xyqqf9pBcCz8NIdJUsja/GFCJryknCJrwJkKjv98e/ht6pDV8kTdxI+BCyuXXw9RJZaz/J+hbQeSRq2ssXM2u7pwoki93LSI5Evg+/Dt+wKwusRi8/SEF++iKM1jtftHqBIVZ1/vML5LEzk/QS4PkgdXlWtoEct7Qy1m+NUasuyvTmrJ7KlQrQJlGdlyaO5owvHZ9DHP9SDqu2++oXwHNJ5ybbx2cu5cL8z+wk7m99Gdv9cjVMnIjWam8TnzKyF3Cj8G/j6SEcP9qeUrWcBcw8Rj/l5GTZVIfcPzVd5/KqK3W+Lfs/VjP7MJyuSlK1974cLCbtoWFYlmEYw/ZkMRi9dPsar2qCmB2irm9F4ZhLNdtgBE3m58tp20IyojWzY0ymn31e1oSMEEV5C5zamWdRMZyNrjdtmwzjqHUmgx4v6Zl4lqjdoqPjNs8+zzZr9kftTCNQ2oOermYINIlOig0cFzIrh9pOcn80zMND1uJJV5nnkXBagcJYm7ECFFX1ZYOsrrXo8szCIMqLwhC+yExvJZzUmm7octSMkcbq1RNpUAy+ykhleaPNnr12ERrOHPdlJrNEqvKogPdVKgOGFSRE1wrMp7Sf2bQOkZcFzOlUZniVIBWcExu+MKXwioC4kOjvEfkt5IqspaoxzO3GjDrhqTMpqlty963lPoPxkDdTN1SApKrp04IQJcl6p7vCRNrk/W2aFiWivN1EX7tHVeREGud+/JCjhPO277TttII5lWisSuS8UmIRGkDpvYTUkDGnLaOo5uOjDq0gqKv52SMLKSOa0yj083iKnT5FyLVeaan2iU4by3t2s6g8pSftyf6yxPqlNafYRjW7zRilJ0UJVw6HBmS+pLtW2bXNWEpnC66rbAUJTtN00yxq2ZSeQXVl9O7elqBg1E4Pj/VuloeZLXqIpj2X3UdgtNIgEjWLb/PJ4vNqT2VDtOZp2o9o7OHNmCVg+gqInVSIQo9VN1iMOS9SPqOavTTuYuVTpctcvtZKVzdpEAnh2XwQpqA+gFg+o/ZS5l/osTzC4tkBOu5S6RD7KRpVZvFDKN5aAuJT2abf0nA/XCR0uz9myMtEIRZeQaCRweMQtSXttzv9zNWu8jXqBF8FotKM4iBHF0L56maAK0P9Pf1XLab09pdDTAntiJQeZHzm6+QqXd10qmj+QZin/eKQnh1FIJYdTLVxUZTSkmPdrOXmNcSyGRWP0Lk+ntFopwgwbXHLhqj0UT5NMfu4Q6otqT0TZcviEPW98BgDX0KhawcctGavst1w3LDJmCSiKpjothk1qjQhLdn0myifCl1YEofoEnqpOgPX0MH3ypXFCb6IcLHvBVtC0c8oGzpdFkuFiDKd/gl93cJsIeEDL8GiNl6Wy6jokKtgKDzDgmf9af1Ikp5dJ1HTf3P+bffk4tqmi5PXs5vTwiGiykafJb+sSAgLRlIDDOpmzaj1nRg1i0ZotrBBy0mDMcY6LrRIodzg2GXxNo7wvGiEeFYQMBg9ZHGIHo2a6bKo+qb/IA5w575whCY2bOE5/lUDC5u0eFHH0qmM6kX9NzF8j69b8AgwL4VocV0zQPSMWE0kPlhNvwvroVGvH7rU2E7v8jNiMbRY7tTEkheJJaywmH5HFo8dgBdbQRWmIaJOuZhzii62CuWuWEy/cuIgvNo6QiziiydsRsha63DqylKpq/hXl0lL8MWH+8gIItxnVuFFQdPkNNNvK7OPzMqztndwcHBUb17d3J7dXjFPDqJOuXmYTdtIxTfkzsSIrm44G2KDHd3p/eXJj7DqPWGFiOUW+TCbjmBNmpa3MmjNNlXx44wZYNI7YPeAMC0Z0aYi/B0xrU3Fwty81fwI7FG/kgS48531l6egOiVcqExjIAmB9HpckVE/hJDZUcfqnfzaDsCTYDts6eU4BrvIHEydJwCes3sI77AlCPmmPXiktAQ5o+lnIuXn/e3tmQvt+vb29v7qkBmfrWtga66/BF/oIBsA6G1rBp1Rs0T9nro5zoDNBwBvNxOrwRfacOAUjyogokYaRHtmNmynLsBvmQFixQiyalmcwZIqoMYwDJGj2UXhb4AWwenxIAfCCbxGKyZEPDu23kq66Rf+fpcBYa5UhwknbAJBRLiY8GyNYgahueFcBogPeQBinlvguCF5UrHF+HSL1t9KxA9WgHc5KwML2Oj75g6xhlBkiECkRv3cx+7rbjr5EHMiRHwW3yIimWBKLTXyfKos6r9THnG1iRja5lQEJc1bJaUHMhmRM/RrZkoyQnQUsOllPoSIvfB8lg5iK3pZ8ioMPmoqxN2VJOYxFjZNQa+Fc0MHpFlWm2V6A0vCHzf9XlrODQ9v8iFEIlw3CTOGFU3WnQZ006/1sFX0nJmzQ+f/j/l0DeJ5ut3fcB6RSFl32+WXxQN38d72KtfOn8xhYYTMOfh21dlIC8uoyGXeDUOP+hGIl+4SHvoKdTdfXhWG4chabQ6OK55uZCGGDNwTIIvHK2fmYAODAZfOHN9agRkYrjHSINLzqMk2P89QeBHFWX6DAasTsV+rdGBvIKMqDSBSfdQkxNeQkfBUzlGeV8O+J1HNigHn4tRce93rv7Wy9t14zsxP7x+1k9wGw4J50Q4fkHx+vi19Zzt/yQjRq6Ku0o4e3jyv7sBJ7f0hag7zbM12NMUfWFl2DTHMqO6iXe+Fn7Ba0UxkzsH3qpPKAjaHlDQbTK5rQmVUEoJ4H9eerq7ZzfFuJJ1mOy6IwU+WDenkJT1fM8iip1nC1Q2Pa9mrAWt6Bk2+NkWqTqnZboy+e/N//lsLjmUSEPdcJ+YtYuIvAuOYlT5BhPqs8gkb/DmjwW+c/jw+Pv7ZrNd8mfpZUS7/wbiKXn60npymE/sv9eb3+/Pzs5tjxswpHOYKL5UnOMPBsDWjdnhzEk5AuIbt0UaqvP6bDrHnV4njRdQ991mX16En73w7ZshIwswo/F7pwmtI3cx3dBMZRECuLdv7HwZZfK7/6Ypt3A29hx67c1sHxhAh2G0Tu5UeHP9SEB7A47AtmzvbR3/+LxWi/gErlTPsyRRXB1aZYq8yhxEm2lEi9BNPD164YnPomH6WKnE8VjraRZ9MiauKRKhg0+zRvcN3zZ0/qGfXcR+JFP7P1CdfpokjjNBWKH14flMQHoT0y/W3m+Nms3l8cx5a1VfHjb6yvRvaKnJ/i3FeiPfvzpqHjfph8/v5W4hBUgwlIocoQlwOD1Ya5uKmvrYp4bl2S/C3DD6qEHXDw6XuUCdO/WEF8hGHCFfq7TWE3Tlcl+5dBC/7HuaZ7xF2cuP016xueLSWH1aeynHQxPADzcXB9tBGCGdLcXv4zX/VWVQmXM49a7wGP/Xmgi6LoQxc0Ad3ceimNW6jExvAP8GSHHAhmHuudMExoD5NMIxYGdNzMBvr3LVjx21+/oO+ioEbfryeHO9pMbUS/DyKfE2wX2pb/CfQ4mN+6aH/mnguxS3Du4ox0IaOwNhuNAOjerX+I19VuW74D2ASfdxoFwocW9heG8y+WGzhW6t4ANcIwfYl0oXbZILoyuLtmr19TknEUE3vK9cgeylwRs32vGF3DokP/Xck0gw3K/WyHmvTh/sXaqThbGI4CqmoIDuVcNSu1hKQoA4cedvR0xRuh4Jj/OvwMNa09xheWF/beuretnAM6qZbu1nztkOArll9DGc5LLjRzo6A4RgfztP4kpAIZ1zGfFsxTzMsq+c7dHVDtCfPGjxEHnGXsAz+SkPumwXnm9QJtvEELFt4U5jMZ17EeGc39D3llUUW9Y+7iIR5fJDsO/GW+gQYG5ZRG2I/gSrAB7Ae9dTnXUi5+4vofeL4QHSIbq0/NEmwrgmGAIRScJ3b2VqCHDCw7ieKD/xH7NP6fVL7RNS6o2jpskg+IrXDRkQs13SOsSmiMSWzYsIIoe1fZ4AiPQzc8Ih99kAHmsIRX7rp5z6uT20n3kmKOOQqtYvEPpsmIiiVd9Dgi32lUoO1LNCj74tX5J0+P+7E7LD38WvwT8cdoTIq4cCOjZOoXqt5Hyam3+zjXU+wt1OVEwbxyLUJO+GHh/b9RHqZ3GRLKNF740JMR+is4j+9Z93dhSPsqNC5PHOXiPc78H4Rt/yCNLEnt9XUk2J4GRpIpKf7MSZGDoP/plKj/uejA5v2HFrvR4lqzlsAdQVVpW75BVFC8R0ZgU8a1m9H4am+CDtTu7FxOGz77V8pR3Z4pK/7US/WT47AuYERIn3CkrPVcggXn4REc+lpQsijm9PCiu88Og7lzdVQ9A7/Va0/vGkqIvkP7kcJpwNpCnKPOEM4WKzGHVwPYXj/GTPC775Lzb6XeO8uE0IF1pfc3HmaiXQIJ7ZaeFwazh0dPIYARqLvywjC2m5g66jHaa6i/tf1kxm4NN2qIwuc2Lfvrdhb+KOwpomkzU4iq3q0Zm6Lev2AH/Wvs24smgapEfrKBFE1Ca/GczMijn2YTSOM435ysbf+mueF1HevLIHe4W+uHpFE481d3FrAZZlgT7cBIxS12FOUi4S4hRJQkaDNm4yVxT8NENpfb1gMsnh6dbvrC+KPqFfjWfy3uI6Ae4QDtwWJHZN7nrwkVNQn9CE+RsMAL1RdWch6EBcdORrHonb460Hj9MnZ91gE1XQ/j3ttBtzztcqJ/o70gcebFa6S8mZrm6vL3fP4ODxWWjlyR6v1PHMcWDqjch9v5zfH9YNkvuIsyTAVdH/oKkAaw/Yikff2pY7eDOJp3XU85ZjDo+ARVyyH+glPcNIQiZ7gHM06jEfCYyLEnW9vaejNIJ6KDVnO+1W7xaXjrdb/TW1n0OE2v5ukPq+gZz+J+uoZyOYvNe6aekKXdHtjlEx2NFbyay/vQ/3Hzn/gVHuIwA1FvpsYZ1Ik1xRiQoSNE/bCU2Q7lE13e29JM/awGtfujjPKP/9Db0oB2vz8olcsV6wgeyxDigTpA08mTf10XvrOwDPoS44bd3JcPzoNtnD9g9ZVDJys6XsB8Z2piLmLeGXIhCbSUbULWNKBWYhXBh92wnR3cfl/dLsYk8XAv4in4JD9oWL40C+ETZMazRexO7zIFZQXEt9o3K4CorO6M0gr9dDcarS1qLKKwBNJmg7SLhiJ/7AtllIi0PdrmI9YE2i4MhOnvcZps3nYOAmiaLrpD8ti/RpmDvRsjEiXM5L0r+qJ6zFqgc8P2oyDQMrSzvh4WMlolg7/gDceE5oc28sd7QFG2NRJxsVoLygBXyf1TTCK9E7m0/UEMEQaHqM2grJlUgVgZ37FkhTYwR/JXEblaLWn/C3irB18X8lZ2kbz+m6Y0xjc8K65d7reQ5uUDuQopfjRHwoSBofcgjXEUKfCt5tmvdFo1E8fQqHia8quENftul3PgNWiB1PrlM1dEqCFnKsjPMf4CNneBfYKH4QD3ySdpfWEOCwaiSTpqyh8BBmNE8BKYed3JQJ4pIm4yrUg//AqBWB6+2utEcdP7/APUsW3QGkUGzewmwI7FBLek3/0DcF3nn3fkkW9GJD7+04i+e3TElGRwJElSKYDrXefQqx6nmWP+Roi1fRzH7uwp4hpSMInK7zIVtqUfQmNq+hC7j7kae11ITLsX4Q7J5CzBuCDvZH1rpJkBWNFB6cPt99235zD2JoHG5ySxLAtDNxQhJ7TCp7SinluVT29T7EQYthQBB2qjdWzxBbUr1HDdA3ZL+GqaJtR09UNAaJ+zMQlU0weIadLODNSwmGIDJFGPF5Et1mJLVg74ueB5tsElZGyRRoOYWoG34aOJL8dZVPGzfRUWSR6ZBXREwXxvZPoOYs578TKDFGgMmpIFjFvJvUkAUxybc+mmAs/aRBpshjSqDX0WOe0M1lM/GBLvgR9ygQxkEX8npHUs58W6K9xDIfVFAGRNepHKtdVZwnTJKqGR2t6PN7aEkS2qL+DLjbtvseU4+rlWRkIWaL+3l7K3QjULdqojbFNRjl3ydmySN35NkMvqaDfMJdSFqJf/1EQRKrpF/A7Khj2oOMWoyqWo20Y3HCUCMN9ncocZRJSjuF3TX/OezaYbu1KuRiQ6CWduU63izCl30+yorTLdNTPcq54oCcZwRUAchcQYeU4DyL1PqViyBLoNzAmB8d6tFWqpJcGkWr6EyT0mI/3W6T0SRZzJT0DWSSjLGa54bGG231HIb+UcxdJRlnEUhcwdcS0h6sl3ZdHd+DCRD2LNErt1CsCkVaQwimL6edSQwqABthVCR7EajkXVtPzqAFldylr6dcgcnopETGz6c8TFnTS5VzMdPtufmKEmCvLMkzlUzte/CxFGOlRf9UJz3O5WmPkwHqfiN4vJZqyqLeFVfW8KesZZRU5aVqGl4pf6+STkFvv1V4ol1cTubt1narAZz6GJ1rIz0tml9YIqutbXkajS1tBouY6tMunTp92vxOnzjd5AYWUmUqLhcUNM7kdWtHLZpL99y2xam2i0Ti0SlJvrGQhFq9Cl2fbSOC0uxLVUIiJLt/sZFDbzp24RRgUjdF4l+lzWwRANohVUeNmRfKq8aky3GrL5TsZMPk26mHWHkb1pSgPoN2Vqd38Ngl8UWVNWxYZ3keIzncnm3tynXF/nymZqFeL86msPsuU2l8R5OrI2MRAKsOlwBgUavMixaLTo6ptn0RN7g2MnJkcY9BjYk+H1OdidZv5xHwjOeE0rT9rZ13J2nDQVzXWmJ5IL4X7UjPkSijw/aIm8d2FwSqUirV44iXqLuE1cfI2otNxlnqJI5Mqrz8NJlYnbbKVjjUZvIs81TmLkF7djqc4bLHKyAqnoMlSq7scjIdWJ4LURmYNx4NltyXLmk7bxR57qtrbVkTTeaYEjCCJgq6psib2573np3ebfn/u9uYtWyWpmi6IHroMzyX7yy2GMwO6p4iNi4gcJ+iCrgs2cZyNLNvKBaQX4qjhNOxTguItE5Gftx1zm6Pcy1gACfK0hKJJu8Vq/YsmIvfK6SQwR3y+Cu2GJPCD0q6nt7qykE9P5CYibs9GgDSZZy9gbgRQI4tyypYrMhcttGuneHzC/rLUBfQxTlUtp03LhM525aVeGR28EMaBlsFbzkuc2iqnzgVSZ1BVuS2uI7GjiP64nAYXFOO0L+dtYKIDFOTeuJxycxqZ474kZHGdWeGJOv88Kc0CplJt0uOzBlZUfJzKL8vxYNjIeNGzBbHpJOrq/Bdgzyh1pj25EM1qc6fUn/1Ky7ciZThrZUm2gMRpcmvU/tWWb02mDZJXg8A98+oJ6n5r8AvD88kav4uq6uQnMoHT7d95H3+Bb5aLasZ42W2pqqZz6X4dcf4TdE3W55+LjZLlX0EdYzJ46VUlWdU0gUuuKPFSVDLXe5m2rf82dCtSOlZ7PB2991oqz/OSJHsk7fO83u++DBaUfOp/D9UU0+xYxnDYtmk4NKyOqZQU7/0/JcM1uy3HuBwAAAAASUVORK5CYII=",
      question: "O que significa esta placa?",
      justification:
        "O significado da placa é “Proibido trânsito de bicicletas”.",
      correct_answer: "Proibido trânsito de bicicletas",
      incorrect_answers: [
        "Não vendemos bicicleta aqui",
        "Odiamos bicicleta",
        "Bicicletas não existem",
      ],
    },
    {
      id: "9",
      category: "PEDESTRES",
      type: "multiple",
      image:
        "data:image/png;base64,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",
      question: "O que significa esta placa?",
      justification: "O significado da placa é “Pedestre, ande pela esquerda”.",
      correct_answer: "Pedestre, ande pela esquerda",
      incorrect_answers: [
        "Pedestre, vire à esquerda",
        "Pedestre, olhe para a esquerda",
        "Pedestre, vire à direita",
      ],
    },
    {
      id: "10",
      category: "PEDESTRES",
      type: "multiple",
      image:
        "data:image/jpeg;base64,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",
      question: "O que significa este sinal no semáforo para pedestres?",
      justification:
        "O sinal significa que o pedestre não pode atravessar a via, pois está na vez dos veículos automotivos.",
      correct_answer: "O pedestre não pode atravessar a via.",
      incorrect_answers: [
        "Corra, pedestre.",
        "O pedestre pode atravessar a via.",
        "O pedestre está com calor",
      ],
    },
    {
      id: "11",
      category: "CICLISTAS",
      question:
        "O ciclista deve pedalar no mesmo sentido da via ou no sentido contrário?",
      image: "",
      justification:
        "Você andar no mesmo sentido da via é mais seguro e está cientificamente provado que é melhor que na contra-via.",

      incorrect_answers: [
        "No sentido contrário da via para poder ver os carros que vem e assim se livrar de um acidente",
        "Tanto faz se não tiver ciclovia não há regra alguma",
      ],

      correct_answer: "No sentido da via",
    },
    {
      id: "11",
      category: "CICLISTAS",
      question:
        "O ciclista deve pedalar no mesmo sentido da via ou no sentido contrário?",
      image: "",
      justification:
        "Você andar no mesmo sentido da via é mais seguro e está cientificamente provado que é melhor que na contra-via.",

      incorrect_answers: [
        "No sentido contrário da via para poder ver os carros que vem e assim se livrar de um acidente",
        "Tanto faz se não tiver ciclovia não há regra alguma",
      ],
      correct_answer: "No sentido da via",
    },
    {
      id: "12",
      category: "CICLISTAS",
      question:
        "Quando o sinal de pedestre abre e o ciclista vai atravessar a via, o ciclista pode subir na bicicleta ou deve empurrá-la?",
      image: "",
      justification:
        "Na faixa de pedestre o ciclista também se torna um pedestre e deve portar como tal",

      incorrect_answers: [
        "O ciclista deve subir na bike e passar o mais rápido possível",
        "O ciclista deve esperar que todos os pedestres passem para só após subir na bike",
      ],
      correct_answer: "O ciclista deve descer da bike e empurrá-la",
    },
    {
      id: "13",
      category: "MOTOCICLISTA",
      question:
        "Se duas motos batem e houve lesões nos dois motociclistas. Os dois têm direito ao DPVAT?",
      image: "",
      justification:
        "O seguro indeniza toda e qualquer lesão causada no trânsito.",

      incorrect_answers: [
        "Não pois o DPVAT só indeniza aquele que estava certo",
        "Nenhum. Pois o DPVAT foi eliminado pelo Governo Federal",
        "Não é possível responder. É necessário uma perícia antes",
      ],
      correct_answer: "Ambos têm direito à indenização pelo DPVAT",
    },
    {
      id: "14",
      category: "GERAL",
      question:
        "Se houver um sinistro você deve solicitar a indenização do DPVAT onde e em qual órgão?",
      image:
        "https://www.contabeis.com.br/assets/img/news/n_41384_ae9962652ca72b43b47d23ca1a088f74.jpg",
      justification:
        "Existe um aplicativo voltado para solicitação de indenização por acidentes no trânsito",

      incorrect_answers: [
        "No DETRAN do seu estado",
        "Você dá entrada na Caixa Econômica Federal",
        "Na justiça",
      ],
      correct_answer: "Tudo é feito on-line através de um aplicativo do DPVAT",
    },
    {
      id: "15",
      category: "GERAL",
      question:
        "Pense num caso em que uma moto bate em um pedestre gerando uma lesão. Esse pedestre tem direito a solicitar a indenização do DPVAT?",
      image:
        "https://www.contabeis.com.br/assets/img/news/n_41384_ae9962652ca72b43b47d23ca1a088f74.jpg",
      justification:
        "O seguro indeniza toda e qualquer lesão causada no trânsito e o pedestre tem os mesmos direitos.",

      incorrect_answers: [
        "É necessário fazer uma perícia para poder verificar se a culpa é do pedestre ou do motociclista",
        "O pedestre não tem direito à indenização pois só os condutores é que pagam o IPVA e o seguro obrigatório",
      ],
      correct_answer:
        "O pedestre terá direito à indenização do DPVAT pois ele está acobertado por esse tipo de sinistro",
    },
    {
      id: "16",
      category: "MOTOCICLISTA",
      question:
        "O motociclista usar o capacete com viseira levantada é sujeito a multa ou não?",
      image:
        "https://www.contabeis.com.br/assets/img/news/n_41384_ae9962652ca72b43b47d23ca1a088f74.jpg",
      justification: "Segurança para o motociclista",

      incorrect_answers: [
        "Não dá multa. Isso é lenda urbana",
        "Alguns modelos de capacete permite andar com a viseira levantada",
      ],
      correct_answer: "É sujeito à multa sim. A viseira tem que estar fechada",
    },
    {
      id: "17",
      category: "MOTOCICLISTA",
      question:
        "Se o motociclista está parado no trânsito, num semáforo por exemplo, ele pode ler suas mensagens ou usar o celular para mexer em algum aplicativo?",
      image: "",
      justification:
        "Mesmo parado você perde a atenção ao trânsito caso fique mexendo no seu aparelho celular ",

      incorrect_answers: [
        "Pode usar normalmente pois como está parado, não está correndo riscos",
        "Isso depende da avaliação do fiscal do trânsito",
      ],
      correct_answer:
        "Não é permitido usar o celular quando se está dirigindo, mesmo parado no trânsito",
    },
    {
      id: "18",
      category: "GERAL",
      question:
        "Numa via que cruza uma ciclofaixa, a prioridade é do veículo ou do ciclista?",
      image: "",
      justification: "A prioridade sempre será do ente mais vulnerável",

      incorrect_answers: [
        "Do veículo pois ele sempre anda mais rápido",
        "Ambos (carro, moto e ciclista) têm que parar para observar se está livre",
      ],
      correct_answer: "Do ciclista pois ele é o mais vulnerável",
    },
    {
      id: "19",
      category: "CICLISTA",
      question:
        "Quando a via não possui ciclovia ou ciclofaixa, é permitido ao ciclista trafegar na calçada?",
      image: "",
      justification: "As calçadas são exclusivas para pedestres",

      incorrect_answers: [
        "Sim pois o ciclista presta atenção no pedestre",
        "Tanto faz. Ele pode subir algumas vezes e descer em outras",
      ],
      correct_answer: "Não é permitido aos ciclistas andar nas calçadas",
    },
    {
      id: "20",
      category: "GERAL",
      question:
        "Se a pessoa não estiver em dia com o licenciamento do veículo e houver um sinistro, ele tem direito à indenização do DPVAT?",
      image: "",
      justification:
        "Por ser obrigatório, pode ser cobrado a qualquer momento pelo órgão responsável pela arrecadação",

      incorrect_answers: [
        "Se não tiver pago, não tem direito à indenização",
        "Tem direito, mas só a uma parte da indenização",
      ],
      correct_answer:
        "Tem direito a indenização totalmente, independentemente de ter pago ou não.",
    },
    {
      id: "21",
      category: "MOTORISTA",
      question:
        "Para você levar um animal no seu veículo, é obrigatório a utilização de cadeira especial para PET ou não tem necessidade?",
      image: "",
      justification:
        "A utilização de cintos e cadeiras já está mais que provado que salva vidas não só de quem as usa, mas também dos demais tripulantes",

      incorrect_answers: [
        "Depende do tipo do animal e do seu porte",
        "Não. Esse acessório é livre. Usa quem quiser",
        "Não existe legislação que trate sobre condução de animais",
      ],
      correct_answer:
        "Sim. Um animal de qualquer porte não pode ficar solto nem no colo de algum passageiro",
    },
    {
      id: "22",
      category: "MOTORISTA",
      question:
        "Para você levar um animal no seu veículo, é obrigatório a utilização de cadeira especial para PET ou não tem necessidade?",
      image: "",
      justification:
        "Por ser obrigatório, pode ser cobrado a qualquer momento pelo órgão responsável pela arrecadação",

      incorrect_answers: [
        "Depende do tipo do animal e do seu porte",
        "Não. Esse acessório é livre. Usa quem quiser",
        "Não existe legislação que trate sobre condução de animais",
      ],
      correct_answer:
        "Sim. Um animal de qualquer porte não pode ficar solto nem no colo de algum passageiro",
    },
    {
      id: "23",
      category: "CICLISTA",
      question: "Qual a diferença entre ciclovias e ciclofaixas?",
      image: "",
      justification:
        "As ciclovias são construídas para proteger ainda mais os ciclistas.",

      incorrect_answers: [
        "Ciclovias e ciclofaixas são a mesma coisa. São sinônimos.",
        "Ciclovias são ruas totalmente voltadas para ciclistas e ciclofaixas são faixas voltadas apenas para ciclistas",
      ],
      correct_answer:
        "Ciclovias têm a separação física (cones, cavaletes, gelo baiano, etc) e ciclofaixas são apenas faixas pintadas no asfalto",
    },
    {
      id: "24",
      category: "CICLISTA",
      question: "Ciclovias são mais seguras que ciclofaixas?",
      image: "",
      justification:
        "As ciclovias são construídas para proteger ainda mais os ciclistas.",

      incorrect_answers: [
        "Não há diferença de segurança. Tanto uma como outra são 100% seguras",
        "As ciclofaixas são mais seguras pois muitos ciclistas batem nas separações que são os cones, cavaletes, gelos baianos, etc e essas batidas causam bastante ferimentos",
      ],
      correct_answer:
        "Apesar das ciclofaixas também proteger o ciclista dos veículos, as ciclofaixas mantém uma distância infinitamente mais seguras para os ciclistas.",
    },
    {
      id: "25",
      category: "CICLISTA",
      question:
        "Qual deve ser a conduta correta do ciclista diante da permanência de um transeunte à pé na ciclofaixa?",
      image: "",
      justification:
        "A regra de trânsito prioriza o pedestre pois é o ente mais vulnerável de todos os envolvidos no trânsito.",

      incorrect_answers: [
        "O ciclista pode tranquilamente atropelar o pedestre pois na ciclofaixa a prioridade é do ciclista",
        "Se o ciclista quiser, pode solicitar para um guarda de trânsito multar e prender o pedestre",
      ],
      correct_answer: "O ciclista deve parar e esperar o pedestre passar.",
    },

    {
      id: "26",
      category: "CICLISTA",
      question:
        "Pedestres e ciclistas que desobedeceram as leis de trânsito poderão ser multados?",
      image: "",
      justification:
        "A regra de trânsito prioriza o pedestre pois é o ente mais vulnerável de todos os envolvidos no trânsito.",

      incorrect_answers: [
        "Não tem multa para pedestres e ciclistas",
        "Só os ciclistas podem ser multados",
      ],
      correct_answer:
        "Tanto pedestres como ciclistas podem ser multados. A lei de trânsito vale para ambos, inclusive o ciclista pode ter sua bicicleta recolhida",
    },
    {
      id: "27",
      category: "CICLISTA",
      question: "Ciclista pode atravessar a faixa de pedestres?",
      image: "",
      justification:
        "A regra de trânsito prioriza o pedestre pois é o ente mais vulnerável de todos os envolvidos no trânsito.",

      incorrect_answers: [
        "Nunca. Só os pedestres podem pisar na faixa pois ela é exclusiva",
        "Às vezes pode, às vezes não pode. Depende se houver ou não sinalização",
      ],
      correct_answer:
        "Sim. Desde que tenha cuidado pois o pedestre tem prioridade",
    },
  ],
};
