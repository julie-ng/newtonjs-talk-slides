Open Web

# IETF: Standardized Health Check Format

```
  GET /health HTTP/1.1
  Host: example.org
  Accept: application/health+json
```

```json
{
  "status": "pass",
  "version": "1",
  "releaseID": "1.2.2",
  "notes": [""],
  "output": "",
  "serviceID": "f03e522f-1f44-4062-9b55-9587f91c9c41",
  "description": "health of authz service",
  "details": {
    "database": [
      { "componentId": "123", "status": "pass" }
    ]	
  }
}
```

Note:
- Why Healthchecks?
	- Prefer agnostic and open-source to vendor software
	- Standard for cloud (auto-scaling)
- IETF: Internet Engineering Task Force
- **Note Details**: can add details of other components 😮
