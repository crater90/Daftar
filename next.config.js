module.exports = {
    async redirects() {
        return [
            {
                source: '/coworking-space',
                destination: '/', // Matched parameters can be used in the destination
                permanent: true,
            },
            {
                source: '/meeting-room',
                destination: '/', // Matched parameters can be used in the destination
                permanent: true,
            },
            {
                source: '/private-office',
                destination: '/', // Matched parameters can be used in the destination
                permanent: true,
            },
            {
                source: '/virtual-office',
                destination: '/', // Matched parameters can be used in the destination
                permanent: true,
            },
            {
                source: '/day-pass',
                destination: '/', // Matched parameters can be used in the destination
                permanent: true,
            },
            {
                source: '/commercial-space',
                destination: '/', // Matched parameters can be used in the destination
                permanent: true,
            },
        ]
    },
}