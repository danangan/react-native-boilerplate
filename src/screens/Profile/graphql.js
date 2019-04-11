import gql from 'graphql-tag'

import client from 'utils/apolloProxy'

const credential =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IjU1NSIsInBlcmFuIjoxLCJrb2RlX3BlbGFuZ2dhbiI6ImI0eGY4Nm8ybXluaiIsImlhdCI6MTU1MTE1NjMxM30.hclGtv1FPtf6vu9ByVjMufoiTejowTcUkWK1XZoCjVw'

const profile = {}
profile.query = () =>
  client.query({
    query: gql`
      {
        pelangganProfile(token: "${credential}") {
          _id
          kelas
          username
          password
          foto_pelanggan
          nama_pelanggan
          peran
          saldo
          email
          alamat
          telepon
        }
      }
    `,
  })

profile.mutation = () =>
  client.mutation({
    mutation: gql`
    {
      pelangganProfile(token: "${credential}"){
        nama_pelanggan
      }
    }
  `,
  })

export default profile
