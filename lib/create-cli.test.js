"use strict";

const test = require("ava");
const execa = require("execa");
const path = require("path");
const rmfr = require("rmfr");

const createLibrary = require("./create-cli");

const fixtures = [
  {
    name: "my-test-cli",
    author: "nala",
    description: "this is an auto-generated test module. please ignore.",
    repo: "nala/my-test-cli",
    license: "MIT",
    manager: "npm",
    template: "ts-cli",
    git: true,
  },
];

fixtures.forEach((fixture, index) => {
  test.serial(
    `${index}) creating "${fixture.name}" using ${fixture.manager}`,
    async (t) => {
      console.log(`creating "${fixture.name}" using ${fixture.manager}...`);
      t.timeout(10 * 60 * 1000);
      let ret;

      // ret = await execa("git", ["config", "user.email", "test@example.com"], {
      //   cwd: root,
      // });
      // t.is(ret.exitCode, 0);
      // ret = await execa("git", ["config", "user.name", "test"], { cwd: root });
      // t.is(ret.exitCode, 0);

      // ensure library is created successfully
      const root = await createLibrary(fixture);
      // const example = path.join(root, 'example')
      t.truthy(root.indexOf(fixture.shortName) >= 0);

      // ensure deps install successfully in root
      ret = await execa(fixture.manager, ["install"], { cwd: root });
      t.is(ret.exitCode, 0);

      // ensure peers deps install successfully in root
      // ret = await execa(fixture.manager, ['run', 'install-peers'], {
      //   cwd: root
      // })
      // t.is(ret.exitCode, 0)

      // ensure root tests pass
      // ret = await execa.shell(`${fixture.manager} test`, { cwd: root })
      // t.is(ret.exitCode, 0)

      // ensure bundle builds successfully
      ret = await execa(fixture.manager, ["build"], { cwd: root });
      t.is(ret.exitCode, 0);

      // ensure parcel builds successfully in example
      // ret = await execa(fixture.manager, ['run', 'build-prod'], { cwd: root })
      // t.is(ret.exitCode, 0)

      // ensure git is initialized properly
      ret = await execa("git", ["rev-parse", "--git-dir"], { cwd: root });
      t.is(ret.stdout, fixture.git ? ".git" : path.join(process.cwd(), ".git"));

      await rmfr(root);
    }
  );
});
