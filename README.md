This is a talk I held on the leipzig.js. It's a brief introduction on
generators and how they make writing asyncron code fun again.

== How

The intro consists of 10 steps which I demonstrated in order.

For step 1 and 2 I started the console and required the files according the
step number and then created a generator with the provided
generator-functions. The console was started using
[nvm](https://github.com/creationix/nvm)

    nvm run 0.11 --harmony-generators

From step 3 on I simply ran the file with node

    nvm run 0.11 --harmony-generators 10.js
