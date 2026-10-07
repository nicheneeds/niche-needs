// Roadie waitlist: one private Blob file per email, named by a hash of the address, so repeats never double up.
const { put } = require('@vercel/blob')
const crypto = require('node:crypto')

const EMAIL = /^[^@\s]{1,64}@[^@\s]{1,255}\.[^@\s]{2,}$/

module.exports = async (req, res) => {
  res.setHeader('Cache-Control', 'no-store')
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ ok: false })
  }
  const { email, website } = req.body ?? {}
  // A real visitor never sees the "website" field, so anything in it is a bot. Say it worked and save nothing.
  if (website) return res.status(200).json({ ok: true })

  const clean = String(email ?? '').trim().toLowerCase()
  if (clean.length > 254 || !EMAIL.test(clean)) return res.status(400).json({ ok: false, error: 'invalid_email' })

  const id = crypto.createHash('sha256').update(clean).digest('hex').slice(0, 32)
  try {
    await put(
      `roadie/signups/${id}.json`,
      JSON.stringify({ email: clean, at: new Date().toISOString(), from: req.headers.referer ?? '' }),
      { access: 'private', contentType: 'application/json', addRandomSuffix: false },
    )
  } catch (e) {
    // The file is already there: this address signed up before.
    if (/already exists/i.test(e.message)) return res.status(200).json({ ok: true, already: true })
    console.error(e)
    return res.status(500).json({ ok: false })
  }
  return res.status(200).json({ ok: true })
}
