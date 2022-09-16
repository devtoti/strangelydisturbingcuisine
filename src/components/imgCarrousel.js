 const bgimgs = [
    {
        id: 1,
        img: 'https://create.starryai.com/_next/image?url=https%3A%2F%2Fstorage.starryai.com%2Fresults%2F765545455%2F3.png%3F*%26Policy%3DeyJTdGF0ZW1lbnQiOiBbeyJSZXNvdXJjZSI6ICJodHRwczovL3N0b3JhZ2Uuc3RhcnJ5YWkuY29tL3Jlc3VsdHMvNzY1NTQ1NDU1LzMucG5nPyoiLCAiQ29uZGl0aW9uIjogeyJEYXRlTGVzc1RoYW4iOiB7IkFXUzpFcG9jaFRpbWUiOiAxNjY1NzA1OTcxfX19XX0_%26Signature%3Da2FiYCKVoF5E~WHMhMoRel4AH0dgAO6399Zrtp9844d~Jiph82GgxxdEiu4ad2jyiyNw15XqHhmP04u4MitjqHYDT52grIk55aNNKi4u--QvpW5y-RniRXqezji87QJRlMMZiLcKSRK7PBBf3AmTZI8pXE7k6D1lIi6sTT6TfwtIh7toB2lr8~1Ez4sag7PM6ZEjSO1-vJVOs3GEpTWNgVvmRYtC0sXbth6ufpMUXNhjWoVygvyAQ6xQYaxQ-DHGJkK6eBCx1Z8S8Ydy4GlmUqiLJavLZCdYlIMEuHpHuR-~11m81gblkB1fk28YAvNIn~d5TwicjyaqbWyKs1SZcw__%26Key-Pair-Id%3DK35YXSO59Z7GJ9&w=1920&q=100'
    },
    {
        id: 2,
        img: 'https://create.starryai.com/_next/image?url=https%3A%2F%2Fstorage.starryai.com%2Fresults%2F586086822%2F4.png%3F*%26Policy%3DeyJTdGF0ZW1lbnQiOiBbeyJSZXNvdXJjZSI6ICJodHRwczovL3N0b3JhZ2Uuc3RhcnJ5YWkuY29tL3Jlc3VsdHMvNTg2MDg2ODIyLzQucG5nPyoiLCAiQ29uZGl0aW9uIjogeyJEYXRlTGVzc1RoYW4iOiB7IkFXUzpFcG9jaFRpbWUiOiAxNjY1NzA1OTYyfX19XX0_%26Signature%3DmrmtOEvfforhjIblcx-dpKvzL3f4WSrFXK3F0VnaHD9BHjYiGwxh2P5bwexxDdJ-QEkhML6omCG0yyASaUFYQ5R175XqgYafpkxQlvm4e4FnVs9EqLaR-1D9nGedBWmNYRdJy7sV5qVIozUoarfxKKqkYuIWPS5pPaBdqTpsSTlx7upic1vRAAwWPsG-Igr-gm2gFN3aeUG6PS9uAUJOZfb-Onlzf~1YExVeubyzFIlxJgjgw89bNpxisNBy0dh08pXWMhSpEwNbeTyBNh5EK3xSxaZxTvtLIm90yUf1zO2c-6z74R~0bOZ0G1LOPyt7RloLTE~sLW1XK29ZotQlZA__%26Key-Pair-Id%3DK35YXSO59Z7GJ9&w=1920&q=100'
    },
    {
        id: 3,
        img: 'https://create.starryai.com/_next/image?url=https%3A%2F%2Fstorage.starryai.com%2Fresults%2F573354694%2F3.png%3F*%26Policy%3DeyJTdGF0ZW1lbnQiOiBbeyJSZXNvdXJjZSI6ICJodHRwczovL3N0b3JhZ2Uuc3RhcnJ5YWkuY29tL3Jlc3VsdHMvNTczMzU0Njk0LzMucG5nPyoiLCAiQ29uZGl0aW9uIjogeyJEYXRlTGVzc1RoYW4iOiB7IkFXUzpFcG9jaFRpbWUiOiAxNjY1NzA1OTQ4fX19XX0_%26Signature%3DUALXw86NXNCRnwYVEtyfQ4fQm9gZcgdewDqeZvLHKfcqvqo2Y~yYgF8YScXjUYN51BRzoAp9ipr9MnWIT8Oa4hkC7dj5zIyuTlzSPJJTit7HI1xkjG7CB3UNi1Qeufm-cEVQyUovsUVK2E~PboEd~ajWM1DN1MpbJ2~HPNbgspc5TNFCNDLiFGXfbu23Q1ozkqavDcClJMbE-jpH7nw79J50U27CdgidG0KnO6xMjXagPQPAOrHO~VpPylgCCDOpEAlrGKjyoyNQBRpwENC5n3ItBcfskdMGoouBS1StRpEyi9TSFQJEYTqqw~QKse56H8X0xcFnHnT4bLJTtpIEJw__%26Key-Pair-Id%3DK35YXSO59Z7GJ9&w=1920&q=100'
    },
    {
        id: 4,
        img: 'https://create.starryai.com/_next/image?url=https%3A%2F%2Fstorage.starryai.com%2Fresults%2F188523508%2F4.png%3F*%26Policy%3DeyJTdGF0ZW1lbnQiOiBbeyJSZXNvdXJjZSI6ICJodHRwczovL3N0b3JhZ2Uuc3RhcnJ5YWkuY29tL3Jlc3VsdHMvMTg4NTIzNTA4LzQucG5nPyoiLCAiQ29uZGl0aW9uIjogeyJEYXRlTGVzc1RoYW4iOiB7IkFXUzpFcG9jaFRpbWUiOiAxNjY1NzA1OTQ0fX19XX0_%26Signature%3DZcecXdQKj9qosqjwiELfWWW1iryVTrJPqbVqHFW6~R~Rk1YRf~uniqomuD9F8BkWj1WFmG1cESBurJZExuUN~-LoWH-3H5XaKldvMott0MFrXbONtQmxT4cDLAZM9s2JsePn1gWa8-sqtD1PhC~1uXJK0ix62tlcv8wVC9QCAB~Qizk65ByARo4M4CUaN~WmwjC2lLBUBCKEe69euy1sDHTx99uw~uwqMFrnOOvQ51oN7v2NsJgcSqw2JXB4TM9Ta8vt9w5JXzycIT6t4K38gH70QadA3mpQl07-k7AOCcc3p2lv9LbRDzxOGIGeZvCeaHqGXbLK~1deZue3CPSj3A__%26Key-Pair-Id%3DK35YXSO59Z7GJ9&w=1920&q=100'
    },
]

export default bgimgs