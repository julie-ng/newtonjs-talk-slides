Architecture 

# Illustrating Dependencies - Visually

<img src="./images/architecture/dependencies.png" alt="Monitoring Microservices">

| Label | Color | Meaning |
|:--|:--|:--|
| **Highlighted Node** | green | healthy |
| **Source** | red | has problems if referenced node is not available |
| **Deep Source** | orange | might not be aware of Source's dependency on Referenced Node |
| **Target** | yellow | no direct dependency | 

Note:
- Arrows indicate dependency, _not_ request flow
- Question: how could target be affected?
	- Sales: less volume ==> problem?