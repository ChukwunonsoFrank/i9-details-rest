export default {
  show: (request, response, next) => {
    response.status(200).json({
      slackUsername: 'franknonso',
      backend: true,
      age: 22,
      bio: 'Keen on solving very difficult engineering problems. I want to build systems that change the world. Elon is my role model.',
    })
  },
}
