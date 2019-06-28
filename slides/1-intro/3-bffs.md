Phones' Performance problems

# Backends for Frontends (BFF)

<img src="./images/intro/graph-3-bffs.png" alt="Introducing backends for frontends" class="img-center">

Note:
- Internet and our App continues to grow. Too big for 1 server
- Split business domains into multiple downstream services

**Frontends:**
- don’t want to talk to 3 different services
- have diff. requirements (many vs. fewer API calls)

**Backends**
- now distinct gatekeepers of state for distinct mediums

- Downstream services -> Opening a can of worms