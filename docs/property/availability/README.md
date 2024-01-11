## Property Availability API
Get property availability on specified dates, room, and guest

### Request
Endpoint
```
/property/availability/{property_id}
```

Params
| name | required | value | example |
| --- | --- | --- | --- |
| property_id | ✅ | number | `9000248877` |

Query
| name | required | value | example |
| --- | --- | --- | --- |
| checkin |  ✅  | string (YYYY-MM-DD) | `2023-01-01`, `2023-06-30` |
| checkout |  ✅  | string (YYYY-MM-DD) | `2023-01-03`, `2023-07-05` |
| number_of_room |  ✅  | number | 1 |
| guest_per_room |  ✅  | number | 2 |

Example request

[https://exterior-technical-test-api.vercel.app/property/availability/9000248877?checkin=2024-06-01&checkout=2024-06-03&number_of_room=1&guest_per_room=2](https://exterior-technical-test-api.vercel.app/property/availability/9000248877?checkin=2024-06-01&checkout=2024-06-03&number_of_room=1&guest_per_room=2)
