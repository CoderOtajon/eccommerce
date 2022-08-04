import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'vkexkzsd',
  dataset: 'production',
  apiVersion: '2022-08-03',
  useCdn: '',
  token:
    'sk7T67UjicHCVctLp79h5th7bRTQD2KmziIOjEOuLVkhVXzjspzGT0DSKb4UCIzLfKVcHvnU1AmVnvGDsbSqWaS0CDSrLunDTLbQdjIM2GSqAnSxG8fqF2HqNth7VP3Kk06v6XDO5khTAI7PacZ9LWLS9mJ5iKbWOjKgeYtAa7jqdStTQJCA',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
