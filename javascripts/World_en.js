let Pays;
let Reponse;
var data = [        //liste de tout les pays
{"pays": "Afghanistan", "image": "<img src=../assets/img/EgBQmruHisxvzZXw.png class=col-12 col-lg-12 mt-4>"},
{"pays": "South Africa", "image": "<img src=../assets/img/k7m5Lin6XOCWVKzv.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Albania", "image": "<img src=../assets/img/39ZxGxwjsQ2Jl3jE.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Algeria", "image": "<img src=../assets/img/xA73HzKRYZ6ClrXC.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Germany", "image": "<img src=../assets/img/KXup461H2orISA2v.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Andorra", "image": "<img src=../assets/img/1Eg2JrIj5MTvaeli.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Angola", "image": "<img src=../assets/img/u6JQn54n5sTZRP18.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Antigua and Barbuda", "image": "<img src=../assets/img/Wo5bv0jimSM0NdqP.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Saudi Arabia", "image": "<img src=../assets/img/B9XcPdo5U6P5yGKp.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Argentina", "image": "<img src=../assets/img/teLBENvc26mabiBl.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Armenia", "image": "<img src=../assets/img/6zrPqj84kCdQICB3.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Australia", "image": "<img src=../assets/img/UgJdr4KusCspJd6O.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Austria", "image": "<img src=../assets/img/dppjyd7n5KEBZeeZ.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Azerbaijan", "image": "<img src=../assets/img/V51UxUv9pfWFSqkp.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Bahamas", "image": "<img src=../assets/img/ZV5jEla07sGYCC44.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Bahrain", "image": "<img src=../assets/img/TYPsA6BjqbCnwcXT.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Bangladesh", "image": "<img src=../assets/img/5I0YKg2HAct4A5e9.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Barbados", "image": "<img src=../assets/img/rAWP9HPiw5vOsGND.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Belgium", "image": "<img src=../assets/img/O51efZoXsF1DKPW9.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Belize", "image": "<img src=../assets/img/GouAifsILFwWn30e.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Benin", "image": "<img src=../assets/img/hKGC0wZuMdXo2YY9.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Bhutan", "image": "<img src=../assets/img/HYM5kp9rLzmowL9b.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Belarus", "image": "<img src=../assets/img/UKXOBjDjjr9xxZQl.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Bolivia", "image": "<img src=../assets/img/HNBJ6D6t0d8F6gc5.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Bosnia and Herzegovina", "image": "<img src=../assets/img/0CtcCUUr6OZKqKSM.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Botswana", "image": "<img src=../assets/img/AMAURvfspvEpjuOG.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Brazil", "image": "<img src=../assets/img/J0crx3xUuyi26gSp.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Brunei", "image": "<img src=../assets/img/jGAuh353tc6emKSp.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Bulgaria", "image": "<img src=../assets/img/111630xzaS3Fs9Iq.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Burkina Faso", "image": "<img src=../assets/img/OkKVtmDnBSRPePb7.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Burundi", "image": "<img src=../assets/img/GTBdpGglxCkqIsqq.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Cambodia", "image": "<img src=../assets/img/HUTReD4bjGgIhKr7.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Cameroon", "image": "<img src=../assets/img/FvkWqrVkydaLSmKH.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Canada", "image": "<img src=../assets/img/UTXfACI8EU5ntdrh.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Cape Verde", "image": "<img src=../assets/img/YpztUkB7bilS2ejo.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Chile", "image": "<img src=../assets/img/lVepbYWDvKrPCJ3D.png class=col-12 col-lg-12 mt-4>"},
{"pays": "China", "image": "<img src=../assets/img/QpDGd7QkmlWfHcO9.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Cyprus", "image": "<img src=../assets/img/TMr4pDd47q64YSzq.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Colombia", "image": "<img src=../assets/img/yKUaF6i5eyBhiJCU.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Comoros", "image": "<img src=../assets/img/Ddb9jljlHjeQF7q9.png class=col-12 col-lg-12 mt-4>"},
{"pays": "North Korea", "image": "<img src=../assets/img/tvNZcnirRvsk5PEm.png class=col-12 col-lg-12 mt-4>"},
{"pays": "South Korea", "image": "<img src=../assets/img/FvveGfVbUGHL7nLg.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Costa Rica", "image": "<img src=../assets/img/f3dpCpbQCKGaweEU.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Ivory Coast", "image": "<img src=../assets/img/TyTJvtbxSk4vhJon.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Croatia", "image": "<img src=../assets/img/bdM4r67Oz5RXLOOS.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Cuba", "image": "<img src=../assets/img/tqKWTwwW5jyDSdGb.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Denmark", "image": "<img src=../assets/img/Ag1NFyJVFySgszKG.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Djibouti", "image": "<img src=../assets/img/WcOwNaRyGhtiClnv.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Dominica", "image": "<img src=../assets/img/U3bASK26rYqiX44q.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Egypt", "image": "<img src=../assets/img/GrWBHTeDXlmPrHKP.png class=col-12 col-lg-12 mt-4>"},
{"pays": "United Arab Emirates", "image": "<img src=../assets/img/2JSi2KT1OJwlYkWO.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Ecuador", "image": "<img src=../assets/img/Yfkj4E23Lhoazln3.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Eritrea", "image": "<img src=../assets/img/C0UdE6gaFtS9B7P4.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Spain", "image": "<img src=../assets/img/lp2RAVuDMOdK6DHn.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Estonia", "image": "<img src=../assets/img/29LaDiy8F3OYs7JS.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Swaziland", "image": "<img src=../assets/img/3XouzhK4ZKjfhIRs.png class=col-12 col-lg-12 mt-4>"},
{"pays": "United States", "image": "<img src=../assets/img/Fzf7mef0b5VcJc1z.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Ethiopia", "image": "<img src=../assets/img/57N4EZNMSNudZCM8.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Fiji", "image": "<img src=../assets/img/8CLIDYM0LdYAQW9L.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Finland", "image": "<img src=../assets/img/E3ON51CakBb9GdfB.png class=col-12 col-lg-12 mt-4>"},
{"pays": "France", "image": "<img src=../assets/img/jLVgHt9OheV49LmL.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Gabon", "image": "<img src=../assets/img/8Bf6TFsecR0FDNne.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Gambia", "image": "<img src=../assets/img/i44W0oRrsx2SeTbr.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Georgia", "image": "<img src=../assets/img/JBKbMZZKjjSWcgNy.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Ghana", "image": "<img src=../assets/img/FfiJhwBElLHYGnvo.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Greece", "image": "<img src=../assets/img/aI3y09G5wknudQuo.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Grenada", "image": "<img src=../assets/img/cJMyZsCGjDNKLdMw.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Guatemala", "image": "<img src=../assets/img/vXxROrvU9r9UCEbR.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Equatorial Guinea", "image": "<img src=../assets/img/P0ZuTxMGM53XpoPp.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Guinea", "image": "<img src=../assets/img/fjlnGBJA6u1qK5fh.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Guinea-Bissau", "image": "<img src=../assets/img/OedQKZkr511SQmq4.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Guyana", "image": "<img src=../assets/img/1JUIJcBheK1oMxx4.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Haiti", "image": "<img src=../assets/img/KIkKHukQuMBhtEu0.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Honduras", "image": "<img src=../assets/img/Dw53KDEbZqKSneUN.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Hungary", "image": "<img src=../assets/img/Im6OIVi8poBdXvVy.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Marshall Islands", "image": "<img src=../assets/img/1PJoZy6pGPQjv0qJ.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Solomon Islands", "image": "<img src=../assets/img/udWsVeZ5ABiL42qb.png class=col-12 col-lg-12 mt-4>"},
{"pays": "India", "image": "<img src=../assets/img/YZPqU5WdHuIpjlBG.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Indonesia", "image": "<img src=../assets/img/05dE1Bz3NnnR3KAy.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Iraq", "image": "<img src=../assets/img/24a3Ccunw76YHpNe.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Iran", "image": "<img src=../assets/img/ck4fzo7HnJDGAsUw.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Ireland", "image": "<img src=../assets/img/UXMLg69pzSVxaGIv.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Iceland", "image": "<img src=../assets/img/b1XH17VkiqWWzJQt.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Israel", "image": "<img src=../assets/img/8Oc2sKFqxkzmjhb7.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Italy", "image": "<img src=../assets/img/uF084aeC7a36YFj0.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Jamaica", "image": "<img src=../assets/img/jlyW7JqIKoPycIKS.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Japan", "image": "<img src=../assets/img/eye476VOhTkUl9Kf.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Jordan", "image": "<img src=../assets/img/n2nUI12lCAP8XnxQ.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Kazakhstan", "image": "<img src=../assets/img/0TJvVdVnqFnEPT7A.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Kenya", "image": "<img src=../assets/img/4WmKIrzDLmuOJv4U.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Kyrgyzstan", "image": "<img src=../assets/img/PWFljbHBXQbgttOr.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Kiribati", "image": "<img src=../assets/img/OF5fT37oeuBtIxo0.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Kuwait", "image": "<img src=../assets/img/fGV0izjQUbhxJP7B.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Laos", "image": "<img src=../assets/img/ul3mdvwDLoiDWcbG.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Lesotho", "image": "<img src=../assets/img/6Qx64b1sq8uuWfci.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Latvia", "image": "<img src=../assets/img/Ilr5YfERByvn28kO.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Lebanon", "image": "<img src=../assets/img/tnaCTsnTNKTNw6NC.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Liberia", "image": "<img src=../assets/img/vnnVjrgaf6EmK5ZD.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Libya", "image": "<img src=../assets/img/YMgRyTQ71liiOfDs.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Liechtenstein", "image": "<img src=../assets/img/a2LXUXLB3xaoBYqh.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Lithuania", "image": "<img src=../assets/img/Ro7eBCrFRugQiUkr.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Luxembourg", "image": "<img src=../assets/img/IDokNyxV74liUoQl.png class=col-12 col-lg-12 mt-4>"},
{"pays": "North Macedonia", "image": "<img src=../assets/img/I3zj2rM8OAIgN2pO.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Madagascar", "image": "<img src=../assets/img/EWWI1MSc2KAKzpjE.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Malaisia", "image": "<img src=../assets/img/gaTdRVO4zW66RRWr.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Malawi", "image": "<img src=../assets/img/bRVOzx61hFwMWBiu.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Maldives", "image": "<img src=../assets/img/OuSNbfzC4QDLPyZd.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Mali", "image": "<img src=../assets/img/JPaYGlVKsgzC7iAW.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Malta", "image": "<img src=../assets/img/24iCpjVbsx4dNxa1.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Morocco", "image": "<img src=../assets/img/I8QOCy2AsIBNLxxK.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Mauritius", "image": "<img src=../assets/img/vawyiFxeZ1IPM63f.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Mauritania", "image": "<img src=../assets/img/omkJa4Gn4UdPPeJd.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Mexico", "image": "<img src=../assets/img/cpGOY5Y0dE7H86Dm.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Micronesia", "image": "<img src=../assets/img/UiwsiqGCWdpnDUDQ.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Moldova", "image": "<img src=../assets/img/k8G1PJPkllTsz6l0.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Monaco", "image": "<img src=../assets/img/ub9V7MMlpLFOcPXb.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Mongolia", "image": "<img src=../assets/img/KaUrMNzw9gzYYafD.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Montenegro", "image": "<img src=../assets/img/sXJJ0sFmHaTOFXfQ.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Mozambique", "image": "<img src=../assets/img/sSk1l1IIAfSIOUQg.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Myanmar", "image": "<img src=../assets/img/wUrfE2PM7MGJp4eY.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Namibia", "image": "<img src=../assets/img/RCo5gzi3rmWR9zLz.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Nauru", "image": "<img src=../assets/img/8g4v5qAGoFvPQtdv.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Nepal", "image": "<img src=../assets/img/3e72qyvF1fjdXEKP.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Nicaragua", "image": "<img src=../assets/img/7E41lDHj08XnjbkG.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Niger", "image": "<img src=../assets/img/IBufDl78cRERAe8j.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Nigeria", "image": "<img src=../assets/img/n9b3ibe8KjDmH0p8.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Norway", "image": "<img src=../assets/img/9lrkIF1r2L5hZET8.png class=col-12 col-lg-12 mt-4>"},
{"pays": "New Zealand", "image": "<img src=../assets/img/4CHo9VVzg95IZCUL.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Oman", "image": "<img src=../assets/img/LKvb5KpUr1fl5KJh.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Uganda", "image": "<img src=../assets/img/QnhN1X1wnaQctgaE.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Uzbekistan", "image": "<img src=../assets/img/dHirckKHHoOwUXQH.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Pakistan", "image": "<img src=../assets/img/0WVM0ug5DGc34IHL.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Palau", "image": "<img src=../assets/img/EUuGYRFu5GjneqGT.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Palestine", "image": "<img src=../assets/img/HeEJpwOUEg9gnuw9.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Panama", "image": "<img src=../assets/img/ka8LOg3gkW0UdM1W.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Papua New Guinea", "image": "<img src=../assets/img/3JIwhCVCAD0OBwHm.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Paraguay", "image": "<img src=../assets/img/Eks0xx51hjnG9UJw.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Netherlands", "image": "<img src=../assets/img/WlsgTYN88lkgVCJA.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Peru", "image": "<img src=../assets/img/2z4fPic0QjSyo0YM.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Philippines", "image": "<img src=../assets/img/0s4zhkn0H5FIMD4b.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Poland", "image": "<img src=../assets/img/Yv0HW7bFglOOD1tr.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Portugal", "image": "<img src=../assets/img/Kh4EEmlUhhnV0wGH.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Qatar", "image": "<img src=../assets/img/AkULDM6pOw97ipDs.png class=col-12 col-lg-12 mt-4>"},
{"pays": "The Central African Republic", "image": "<img src=../assets/img/XnsgvlkGfjc56IcS.png class=col-12 col-lg-12 mt-4>"},
{"pays": "The Democratic Republic of the Congo", "image": "<img src=../assets/img/yoRzfWyvi05V0D11.png class=col-12 col-lg-12 mt-4>"},
{"pays": "The Dominican Republic", "image": "<img src=../assets/img/8vD4OoZBVmkRKqJ1.png class=col-12 col-lg-12 mt-4>"},
{"pays": "The Republic of the Congo", "image": "<img src=../assets/img/VlRdwVDDmRRy8uQt.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Czech Republic", "image": "<img src=../assets/img/r3Mxtsn9ojT2mJi1.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Romania", "image": "<img src=../assets/img/etzpjLPntii4g1GP.png class=col-12 col-lg-12 mt-4>"},
{"pays": "United Kingdom", "image": "<img src=../assets/img/T0990QGWVErpVMeQ.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Russia", "image": "<img src=../assets/img/MRZvfcMCtq3KsKrR.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Rwanda", "image": "<img src=../assets/img/j3vzI0RTDYSek481.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Saint Kitts and Nevis", "image": "<img src=../assets/img/RebuUjXyDqqX9DcP.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Saint Lucia", "image": "<img src=../assets/img/ysAJna6g6lKszw2D.png class=col-12 col-lg-12 mt-4>"},
{"pays": "San Marino", "image": "<img src=../assets/img/B2nGzcxZDgk39mUE.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Saint Vincent and the Grenadines", "image": "<img src=../assets/img/n7k9o82CkCMtD7Wb.png class=col-12 col-lg-12 mt-4>"},
{"pays": "El Salvador", "image": "<img src=../assets/img/pZVUWIuMaqU1BGkL.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Samoa", "image": "<img src=../assets/img/2VGnOnFIvEtynpr8.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Sao Tome and Principe", "image": "<img src=../assets/img/NWQBauiYOdcZhUsE.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Senegal", "image": "<img src=../assets/img/qZqJTm3NY4gkyQse.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Serbia", "image": "<img src=../assets/img/UUz5nnfg2J4JKtox.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Seychelles", "image": "<img src=../assets/img/Uwx8Fpg0IVX5Vgbr.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Sierra Leone", "image": "<img src=../assets/img/jHPttlNXpXmle27i.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Singapore", "image": "<img src=../assets/img/fCfGwBwbDJIWcuzK.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Slovakia", "image": "<img src=../assets/img/qxnPusNs4fhaney8.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Slovenia", "image": "<img src=../assets/img/puYRoSHvRW33RW3W.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Somalia", "image": "<img src=../assets/img/oJLjnQ27ROQSeTmp.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Sudan", "image": "<img src=../assets/img/ysCFJ68rlj1gVJgr.png class=col-12 col-lg-12 mt-4>"},
{"pays": "South Sudan", "image": "<img src=../assets/img/JKiV9SYBqQ3nK0rQ.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Sri Lanka", "image": "<img src=../assets/img/QimrYc5cilayhyqy.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Sweden", "image": "<img src=../assets/img/tmLweftvfvt29R5t.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Switzerland", "image": "<img src=../assets/img/GNZ9hn50nOwlNUxm.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Suriname", "image": "<img src=../assets/img/owjWMVodX8OWRq9e.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Syria", "image": "<img src=../assets/img/lEJssLkQh1QuPr5J.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Tajikistan", "image": "<img src=../assets/img/byIvbd18Tu9Dt2wx.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Tanzania", "image": "<img src=../assets/img/GQ1ZIpCSOGIcI0m2.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Chad", "image": "<img src=../assets/img/LBnHt6pvWSlrHFC3.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Thailand", "image": "<img src=../assets/img/M9HEd4kBjorqrOqx.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Timor-Leste", "image": "<img src=../assets/img/pJj9OOjKyHhE7fUD.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Togo", "image": "<img src=../assets/img/J6bCdxFz8bhSklrl.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Tonga", "image": "<img src=../assets/img/5KdcVLe9bwrluhKb.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Trinidad and Tobago", "image": "<img src=../assets/img/t1jwJKbFRFVBluOH.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Tunisia", "image": "<img src=../assets/img/mV0yV3zzTqvr0m4O.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Turkmenistan", "image": "<img src=../assets/img/AWs0EA8FjCQnjrTJ.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Turkey", "image": "<img src=../assets/img/LcTbOo8I0HmBvR1Y.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Tuvalu", "image": "<img src=../assets/img/bhyJyTBQuQNRgayt.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Ukraine", "image": "<img src=../assets/img/dXEHVNyCbABpEEoE.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Uruguay", "image": "<img src=../assets/img/9DQlTgYXNXFgPTdE.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Vanuatu", "image": "<img src=../assets/img/maVTiU6RpnLIvzqI.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Vatican City", "image": "<img src=../assets/img/v80gPOL9u2zcJ7Us.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Venezuela", "image": "<img src=../assets/img/fMcQIsGM1wpTB5Vo.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Vietnam", "image": "<img src=../assets/img/5TQwvi8FabROFQWM.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Yemen", "image": "<img src=../assets/img/zqtRlKfwuFxhNPiQ.png class=col-12 col-lg-12 mt-4>"},
{"pays": "Zambia", "image": "<img src=../assets/img/2NABmcD5D5yTcQxN.png class=col-12 col-lg-12 mt-4>"},
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




random = Math.floor(Math.random() * data.length)                     //Selection de manière aleatoire du pays/ de l'image
Pays = data[random].pays                                             //Et stockage dans la variable pays
document.querySelector(".random").innerHTML = data[random].image     //Grâce a la delimitation etablie avec les virgules

btn = document.querySelector(".popup")                               //Quand on appuie sur le bouton avec la class popup
btn.addEventListener("click", reponse);                              //

entrer = document.getElementById("input").onkeydown = function(e) {    
  if (e.code == "Enter") {
    popup()
  }
};


document.addEventListener('keydown', function(event) {
  if (event.code == 'Enter') {
    console.log("ok")                                                           //le popup avec fond vert si bon rouge sinon
    reponse = document.querySelector("input").value                             //
    if (reponse.toLowerCase() == Pays.toLowerCase()) {                          //
      document.querySelector(".popuptext").style.backgroundColor = "#1ab315"    //
      document.getElementById("input").disabled = true; 
      btnnewflag = document.getElementById("divnewflag")
      btnnewflag.style.display  = 'inline-flex';
    }                                                                           //
    else {                                                                      //
      document.querySelector(".popuptext").style.backgroundColor = "red"        //
      document.getElementById("input").disabled = true;                         //
      document.getElementById("refresh").style.display = "block";
    }  
  }
});                                                                  //


function reponse() {                                                          //Fonction qui vérifie la réponse et l'affiche sur 
  console.log("ok")                                                           //le popup avec fond vert si bon rouge sinon
  reponse = document.querySelector("input").value                             //
  if (reponse.toLowerCase() == Pays.toLowerCase()) {                          //
    document.querySelector(".popuptext").style.backgroundColor = "#1ab315"    //
    document.getElementById("send").disabled = true;                          //
    document.getElementById("refresh").style.display = "none";
   }                                                                          //
  else {                                                                      //
    document.querySelector(".popuptext").style.backgroundColor = "red"        //
    document.getElementById("send").disabled = true;                          //
    document.getElementById("refresh").style.display = "block";
  }                                                                           //
};                                                                            //                                                                        //


input.onblur = function () {
  datalistOptions.style.display = 'none';
  input.style.borderRadius = "5px";
};

for (let option of datalistOptions.options) {
  option.onmousedown = function (e) {
    e.preventDefault();  // Empêche le focus de passer à l'option
    input.value = option.value;
    datalistOptions.style.display = 'none';
    input.style.borderRadius = "5px";
  }
};


function popup() {                                                            //Fonction qui affiche le popup
  var popup = document.getElementById("myPopup");                             //
  popup.classList.toggle("show");                                             //
  document.getElementById("nomPays").innerHTML = Pays;                        //
}                                                                             //