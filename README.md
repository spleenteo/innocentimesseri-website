## Setup

```
git clone git@gitlab.com:cantierecreativo/innocentimesseri.git
```

And then:

```
bundle install
yarn install
```

## How to deploy

First you need to add the production remote:

```
git remote add production git@gitlab.com:cantierecreativo/innocentimesseri.git
```

Then just git push to production, Netlify will take care of everything:

```
git push production
```
