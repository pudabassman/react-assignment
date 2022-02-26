import md5 from 'md5'

const utilities = {
  gravatarHash: email => md5(email.trim().toLowerCase()),
  gravatarLink: email => `https://www.gravatar.com/avatar/${utilities.gravatarHash(email)}?s=32&d=identicon&r=PG`
}

export default utilities