let Pays;
let Reponse;
var data = [        //liste de tout les pays
{"pays": "Afghanistan", "image": "<img src=../assets/img/EgBQmruHisxvzZXw.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Afrique du Sud", "image": "<img src=../assets/img/k7m5Lin6XOCWVKzv.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Albanie", "image": "<img src=../assets/img/39ZxGxwjsQ2Jl3jE.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Algérie", "image": "<img src=../assets/img/xA73HzKRYZ6ClrXC.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Allemagne", "image": "<img src=../assets/img/KXup461H2orISA2v.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Andorre", "image": "<img src=../assets/img/1Eg2JrIj5MTvaeli.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Angola", "image": "<img src=../assets/img/u6JQn54n5sTZRP18.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Antigua-et-Barbuda", "image": "<img src=../assets/img/Wo5bv0jimSM0NdqP.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Arabie Saoudite", "image": "<img src=../assets/img/B9XcPdo5U6P5yGKp.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Argentine", "image": "<img src=../assets/img/teLBENvc26mabiBl.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Arménie", "image": "<img src=../assets/img/6zrPqj84kCdQICB3.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Australie", "image": "<img src=../assets/img/UgJdr4KusCspJd6O.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Autriche", "image": "<img src=../assets/img/dppjyd7n5KEBZeeZ.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Azerbaïdjan", "image": "<img src=../assets/img/V51UxUv9pfWFSqkp.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Bahamas", "image": "<img src=../assets/img/ZV5jEla07sGYCC44.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Bahreïn", "image": "<img src=../assets/img/TYPsA6BjqbCnwcXT.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Bangladesh", "image": "<img src=../assets/img/5I0YKg2HAct4A5e9.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Barbade", "image": "<img src=../assets/img/rAWP9HPiw5vOsGND.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Belgique", "image": "<img src=../assets/img/O51efZoXsF1DKPW9.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Bélize", "image": "<img src=../assets/img/GouAifsILFwWn30e.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Bénin", "image": "<img src=../assets/img/hKGC0wZuMdXo2YY9.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Bhoutan", "image": "<img src=../assets/img/HYM5kp9rLzmowL9b.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Biélorussie", "image": "<img src=../assets/img/UKXOBjDjjr9xxZQl.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Bolivie", "image": "<img src=../assets/img/HNBJ6D6t0d8F6gc5.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Bosnie-Herzégovine", "image": "<img src=../assets/img/0CtcCUUr6OZKqKSM.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Botswana", "image": "<img src=../assets/img/AMAURvfspvEpjuOG.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Brésil", "image": "<img src=../assets/img/J0crx3xUuyi26gSp.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Brunei", "image": "<img src=../assets/img/jGAuh353tc6emKSp.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Bulgarie", "image": "<img src=../assets/img/111630xzaS3Fs9Iq.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Burkina Faso", "image": "<img src=../assets/img/OkKVtmDnBSRPePb7.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Burundi", "image": "<img src=../assets/img/GTBdpGglxCkqIsqq.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Cambodge", "image": "<img src=../assets/img/HUTReD4bjGgIhKr7.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Cameroun", "image": "<img src=../assets/img/FvkWqrVkydaLSmKH.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Canada", "image": "<img src=../assets/img/UTXfACI8EU5ntdrh.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Cap-Vert", "image": "<img src=../assets/img/YpztUkB7bilS2ejo.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Chili", "image": "<img src=../assets/img/lVepbYWDvKrPCJ3D.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Chine", "image": "<img src=../assets/img/QpDGd7QkmlWfHcO9.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Chypre", "image": "<img src=../assets/img/TMr4pDd47q64YSzq.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Colombie", "image": "<img src=../assets/img/yKUaF6i5eyBhiJCU.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Comores", "image": "<img src=../assets/img/Ddb9jljlHjeQF7q9.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Corée du Nord", "image": "<img src=../assets/img/tvNZcnirRvsk5PEm.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Corée du Sud", "image": "<img src=../assets/img/FvveGfVbUGHL7nLg.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Costa Rica", "image": "<img src=../assets/img/f3dpCpbQCKGaweEU.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Côte d'Ivoire", "image": "<img src=../assets/img/TyTJvtbxSk4vhJon.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Croatie", "image": "<img src=../assets/img/bdM4r67Oz5RXLOOS.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Cuba", "image": "<img src=../assets/img/tqKWTwwW5jyDSdGb.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Danemark", "image": "<img src=../assets/img/Ag1NFyJVFySgszKG.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Djibouti", "image": "<img src=../assets/img/WcOwNaRyGhtiClnv.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Dominique", "image": "<img src=../assets/img/U3bASK26rYqiX44q.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Écosse", "image": "<img src=../assets/img/QzIRceVpMU3LTj0A.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Égypte", "image": "<img src=../assets/img/GrWBHTeDXlmPrHKP.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Emirats Arabes Unis", "image": "<img src=../assets/img/2JSi2KT1OJwlYkWO.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Équateur", "image": "<img src=../assets/img/Yfkj4E23Lhoazln3.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Érythrée", "image": "<img src=../assets/img/C0UdE6gaFtS9B7P4.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Espagne", "image": "<img src=../assets/img/lp2RAVuDMOdK6DHn.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Estonie", "image": "<img src=../assets/img/29LaDiy8F3OYs7JS.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Eswatini", "image": "<img src=../assets/img/3XouzhK4ZKjfhIRs.png class=col-12 col-lg-12 mt-4>"},
{"pays": "États-Unis", "image": "<img src=../assets/img/Fzf7mef0b5VcJc1z.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Éthiopie", "image": "<img src=../assets/img/57N4EZNMSNudZCM8.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Fidji", "image": "<img src=../assets/img/8CLIDYM0LdYAQW9L.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Finlande", "image": "<img src=../assets/img/E3ON51CakBb9GdfB.png class=col-12 col-lg-12 mt-4>"},
{"pays": "France", "image": "<img src=../assets/img/jLVgHt9OheV49LmL.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Gabon", "image": "<img src=../assets/img/8Bf6TFsecR0FDNne.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Gambie", "image": "<img src=../assets/img/i44W0oRrsx2SeTbr.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Géorgie", "image": "<img src=../assets/img/JBKbMZZKjjSWcgNy.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Ghana", "image": "<img src=../assets/img/FfiJhwBElLHYGnvo.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Grèce", "image": "<img src=../assets/img/aI3y09G5wknudQuo.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Grenade", "image": "<img src=../assets/img/cJMyZsCGjDNKLdMw.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Guatemala", "image": "<img src=../assets/img/vXxROrvU9r9UCEbR.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Guinée Équatoriale", "image": "<img src=../assets/img/P0ZuTxMGM53XpoPp.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Guinée", "image": "<img src=../assets/img/fjlnGBJA6u1qK5fh.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Guinée-Bissau", "image": "<img src=../assets/img/OedQKZkr511SQmq4.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Guyana", "image": "<img src=../assets/img/1JUIJcBheK1oMxx4.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Haïti", "image": "<img src=../assets/img/KIkKHukQuMBhtEu0.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Honduras", "image": "<img src=../assets/img/Dw53KDEbZqKSneUN.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Hongrie", "image": "<img src=../assets/img/Im6OIVi8poBdXvVy.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Îles Marshall", "image": "<img src=../assets/img/1PJoZy6pGPQjv0qJ.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Îles Salomon", "image": "<img src=../assets/img/udWsVeZ5ABiL42qb.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Inde", "image": "<img src=../assets/img/YZPqU5WdHuIpjlBG.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Indonésie", "image": "<img src=../assets/img/05dE1Bz3NnnR3KAy.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Irak", "image": "<img src=../assets/img/24a3Ccunw76YHpNe.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Iran", "image": "<img src=../assets/img/ck4fzo7HnJDGAsUw.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Irlande", "image": "<img src=../assets/img/UXMLg69pzSVxaGIv.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Islande", "image": "<img src=../assets/img/b1XH17VkiqWWzJQt.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Israël", "image": "<img src=../assets/img/8Oc2sKFqxkzmjhb7.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Italie", "image": "<img src=../assets/img/uF084aeC7a36YFj0.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Jamaïque", "image": "<img src=../assets/img/jlyW7JqIKoPycIKS.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Japon", "image": "<img src=../assets/img/eye476VOhTkUl9Kf.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Jordanie", "image": "<img src=../assets/img/n2nUI12lCAP8XnxQ.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Kazakhstan", "image": "<img src=../assets/img/0TJvVdVnqFnEPT7A.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Kenya", "image": "<img src=../assets/img/4WmKIrzDLmuOJv4U.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Kirghizistan", "image": "<img src=../assets/img/PWFljbHBXQbgttOr.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Kiribati", "image": "<img src=../assets/img/OF5fT37oeuBtIxo0.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Koweit", "image": "<img src=../assets/img/fGV0izjQUbhxJP7B.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Laos", "image": "<img src=../assets/img/ul3mdvwDLoiDWcbG.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Lesotho", "image": "<img src=../assets/img/6Qx64b1sq8uuWfci.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Lettonie", "image": "<img src=../assets/img/Ilr5YfERByvn28kO.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Liban", "image": "<img src=../assets/img/tnaCTsnTNKTNw6NC.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Libéria", "image": "<img src=../assets/img/vnnVjrgaf6EmK5ZD.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Libye", "image": "<img src=../assets/img/YMgRyTQ71liiOfDs.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Liechtenstein", "image": "<img src=../assets/img/a2LXUXLB3xaoBYqh.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Lituanie", "image": "<img src=../assets/img/Ro7eBCrFRugQiUkr.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Luxembourg", "image": "<img src=../assets/img/IDokNyxV74liUoQl.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Macédoine du Nord", "image": "<img src=../assets/img/I3zj2rM8OAIgN2pO.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Madagascar", "image": "<img src=../assets/img/EWWI1MSc2KAKzpjE.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Malaisie", "image": "<img src=../assets/img/gaTdRVO4zW66RRWr.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Malawi", "image": "<img src=../assets/img/bRVOzx61hFwMWBiu.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Maldives", "image": "<img src=../assets/img/OuSNbfzC4QDLPyZd.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Mali", "image": "<img src=../assets/img/JPaYGlVKsgzC7iAW.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Malte", "image": "<img src=../assets/img/24iCpjVbsx4dNxa1.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Maroc", "image": "<img src=../assets/img/I8QOCy2AsIBNLxxK.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Maurice", "image": "<img src=../assets/img/vawyiFxeZ1IPM63f.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Mauritanie", "image": "<img src=../assets/img/omkJa4Gn4UdPPeJd.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Mexique", "image": "<img src=../assets/img/cpGOY5Y0dE7H86Dm.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Micronésie", "image": "<img src=../assets/img/UiwsiqGCWdpnDUDQ.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Moldavie", "image": "<img src=../assets/img/k8G1PJPkllTsz6l0.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Monaco", "image": "<img src=../assets/img/ub9V7MMlpLFOcPXb.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Mongolie", "image": "<img src=../assets/img/KaUrMNzw9gzYYafD.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Monténégro", "image": "<img src=../assets/img/sXJJ0sFmHaTOFXfQ.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Mozanbique", "image": "<img src=../assets/img/sSk1l1IIAfSIOUQg.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Myanmar", "image": "<img src=../assets/img/wUrfE2PM7MGJp4eY.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Namibie", "image": "<img src=../assets/img/RCo5gzi3rmWR9zLz.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Nauru", "image": "<img src=../assets/img/8g4v5qAGoFvPQtdv.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Népal", "image": "<img src=../assets/img/3e72qyvF1fjdXEKP.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Nicaragua", "image": "<img src=../assets/img/7E41lDHj08XnjbkG.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Niger", "image": "<img src=../assets/img/IBufDl78cRERAe8j.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Nigeria", "image": "<img src=../assets/img/n9b3ibe8KjDmH0p8.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Norvège", "image": "<img src=../assets/img/9lrkIF1r2L5hZET8.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Nouvelle-Zélande", "image": "<img src=../assets/img/4CHo9VVzg95IZCUL.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Oman", "image": "<img src=../assets/img/LKvb5KpUr1fl5KJh.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Ouganda", "image": "<img src=../assets/img/QnhN1X1wnaQctgaE.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Ouzbékistan", "image": "<img src=../assets/img/dHirckKHHoOwUXQH.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Pakistan", "image": "<img src=../assets/img/0WVM0ug5DGc34IHL.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Palaos", "image": "<img src=../assets/img/EUuGYRFu5GjneqGT.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Palestine", "image": "<img src=../assets/img/HeEJpwOUEg9gnuw9.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Panama", "image": "<img src=../assets/img/ka8LOg3gkW0UdM1W.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Papouasie-Nouvelle-Guinée", "image": "<img src=../assets/img/3JIwhCVCAD0OBwHm.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Paraguay", "image": "<img src=../assets/img/Eks0xx51hjnG9UJw.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Pays-Bas", "image": "<img src=../assets/img/WlsgTYN88lkgVCJA.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Pérou", "image": "<img src=../assets/img/2z4fPic0QjSyo0YM.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Philippines", "image": "<img src=../assets/img/0s4zhkn0H5FIMD4b.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Pologne", "image": "<img src=../assets/img/Yv0HW7bFglOOD1tr.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Portugal", "image": "<img src=../assets/img/Kh4EEmlUhhnV0wGH.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Qatar", "image": "<img src=../assets/img/AkULDM6pOw97ipDs.png class=col-12 col-lg-12 mt-4>"},
{"pays": "République Centrafiquaine", "image": "<img src=../assets/img/XnsgvlkGfjc56IcS.png class=col-12 col-lg-12 mt-4>"},
{"pays": "République Démocratique du Congo", "image": "<img src=../assets/img/yoRzfWyvi05V0D11.png class=col-12 col-lg-12 mt-4>"},
{"pays": "République Dominicaine", "image": "<img src=../assets/img/8vD4OoZBVmkRKqJ1.png class=col-12 col-lg-12 mt-4>"},
{"pays": "République du Congo", "image": "<img src=../assets/img/VlRdwVDDmRRy8uQt.png class=col-12 col-lg-12 mt-4>"},
{"pays": "République Tchèque", "image": "<img src=../assets/img/r3Mxtsn9ojT2mJi1.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Roumanie", "image": "<img src=../assets/img/etzpjLPntii4g1GP.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Royaume-Uni", "image": "<img src=../assets/img/T0990QGWVErpVMeQ.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Russie", "image": "<img src=../assets/img/MRZvfcMCtq3KsKrR.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Rwanda", "image": "<img src=../assets/img/j3vzI0RTDYSek481.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Saint-Christophe-et-Niévès", "image": "<img src=../assets/img/RebuUjXyDqqX9DcP.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Sainte-Lucie", "image": "<img src=../assets/img/ysAJna6g6lKszw2D.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Saint-Marin", "image": "<img src=../assets/img/B2nGzcxZDgk39mUE.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Saint-Vincent-et-les-Grenadines", "image": "<img src=../assets/img/n7k9o82CkCMtD7Wb.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Salvador", "image": "<img src=../assets/img/pZVUWIuMaqU1BGkL.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Samoa", "image": "<img src=../assets/img/2VGnOnFIvEtynpr8.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Sao Tomé-et-Principe", "image": "<img src=../assets/img/NWQBauiYOdcZhUsE.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Sénégal", "image": "<img src=../assets/img/qZqJTm3NY4gkyQse.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Serbie", "image": "<img src=../assets/img/UUz5nnfg2J4JKtox.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Seychelles", "image": "<img src=../assets/img/Uwx8Fpg0IVX5Vgbr.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Sierra Leone", "image": "<img src=../assets/img/jHPttlNXpXmle27i.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Singapour", "image": "<img src=../assets/img/fCfGwBwbDJIWcuzK.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Slovaquie", "image": "<img src=../assets/img/qxnPusNs4fhaney8.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Slovénie", "image": "<img src=../assets/img/puYRoSHvRW33RW3W.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Somalie", "image": "<img src=../assets/img/oJLjnQ27ROQSeTmp.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Soudan", "image": "<img src=../assets/img/ysCFJ68rlj1gVJgr.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Soudan du Sud", "image": "<img src=../assets/img/JKiV9SYBqQ3nK0rQ.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Sri Lanka", "image": "<img src=../assets/img/QimrYc5cilayhyqy.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Suède", "image": "<img src=../assets/img/tmLweftvfvt29R5t.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Suisse", "image": "<img src=../assets/img/GNZ9hn50nOwlNUxm.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Suriname", "image": "<img src=../assets/img/owjWMVodX8OWRq9e.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Syrie", "image": "<img src=../assets/img/lEJssLkQh1QuPr5J.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Tadjikistan", "image": "<img src=../assets/img/byIvbd18Tu9Dt2wx.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Tanzanie", "image": "<img src=../assets/img/GQ1ZIpCSOGIcI0m2.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Tchad", "image": "<img src=../assets/img/LBnHt6pvWSlrHFC3.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Thaïland", "image": "<img src=../assets/img/M9HEd4kBjorqrOqx.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Timor-Leste", "image": "<img src=../assets/img/pJj9OOjKyHhE7fUD.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Togo", "image": "<img src=../assets/img/J6bCdxFz8bhSklrl.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Tonga", "image": "<img src=../assets/img/5KdcVLe9bwrluhKb.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Trinité-et-Tobago", "image": "<img src=../assets/img/t1jwJKbFRFVBluOH.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Tunisie", "image": "<img src=../assets/img/mV0yV3zzTqvr0m4O.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Turkménistan", "image": "<img src=../assets/img/AWs0EA8FjCQnjrTJ.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Turquie", "image": "<img src=../assets/img/LcTbOo8I0HmBvR1Y.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Tuvalu", "image": "<img src=../assets/img/bhyJyTBQuQNRgayt.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Ukraine", "image": "<img src=../assets/img/dXEHVNyCbABpEEoE.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Uruguay", "image": "<img src=../assets/img/9DQlTgYXNXFgPTdE.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Vanuatu", "image": "<img src=../assets/img/maVTiU6RpnLIvzqI.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Vatican", "image": "<img src=../assets/img/v80gPOL9u2zcJ7Us.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Vénézuela", "image": "<img src=../assets/img/fMcQIsGM1wpTB5Vo.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Vietnam", "image": "<img src=../assets/img/5TQwvi8FabROFQWM.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Yémen", "image": "<img src=../assets/img/zqtRlKfwuFxhNPiQ.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Zambie", "image": "<img src=../assets/img/2NABmcD5D5yTcQxN.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Zimbabwe", "image": "<img src=../assets/img/KxXb3GASQZWVDgny.png class=col-12 col-lg-12 mt-4>"},
]





input.onfocus = function () {
  datalistOptions.style.display = 'block';
  input.style.borderRadius = "5px 5px 0 0";  
};
for (let option of datalistOptions.options) {
  option.onclick = function () {
    input.value = option.value;
    datalistOptions.style.display = 'none';
    input.style.borderRadius = "5px";
  }
};

input.oninput = function() {
  currentFocus = -1;
  var text = input.value.toUpperCase();
  for (let option of datalistOptions.options) {
    if(option.value.toUpperCase().indexOf(text) > -1){
      option.style.display = "block";
  }else{
    option.style.display = "none";
    }
  };
}
var currentFocus = -1;
input.onkeydown = function(e) {
  if(e.keyCode == 40){
    currentFocus++
   addActive(datalistOptions.options);
  }
  else if(e.keyCode == 38){
    currentFocus--
   addActive(datalistOptions.options);
  }
  else if(e.keyCode == 13){
    e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (datalistOptions.options) datalistOptions.options[currentFocus].click();
        }
  }
}

function addActive(x) {
    if (!x) return false;
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    x[currentFocus].classList.add("active");
  }
  function removeActive(x) {
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("active");
    }
  }



random = Math.floor(Math.random() * data.length)                     //Séléction de manière aléatoire du pays/ de l'image
Pays = data[random].pays                                             //Et stockage dans la variable pays
document.querySelector(".random").innerHTML = data[random].image     //Grâce a la délimitation établie avec les virgules

btn = document.querySelector(".popup")                               //Quand on appuie sur le bouton avec la class popup
btn.addEventListener("click", reponse);                              //

oui = document.getElementById("input").onkeydown = function(e) {    //Fonction pour envoyer la réponse avec la touche entrée
  if (e.code == "Enter") {                                          //
    reponse()                                                       //
  }                                                                 //
};                                                                  //


function reponse() {                                                          //Fonction qui vérifie la réponse et l'affiche sur 
  console.log("ok")                                                           //le popup avec fond vert si bon rouge sinon
  reponse = document.querySelector("input").value                             //
  if (reponse.toLowerCase() == Pays.toLowerCase()) {                          //
    document.querySelector(".popuptext").style.backgroundColor = "#1ab315"    //
    document.getElementById("input").disabled = true;                          //
   }                                                                          //
  else {                                                                      //
    document.querySelector(".popuptext").style.backgroundColor = "red"        //
    document.getElementById("input").disabled = true;                          //
  }                                                                           //
};                                                                            //


function popup() {                                                            //Fonction qui affiche le popup
  var popup = document.getElementById("myPopup");                             //
  popup.classList.toggle("show");                                             //
  document.getElementById("nomPays").innerHTML = Pays;                        //
}                                                                             //