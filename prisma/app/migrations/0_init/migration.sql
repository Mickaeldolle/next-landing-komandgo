-- CreateTable
CREATE TABLE "address" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER,
    "label" VARCHAR(250) NOT NULL,
    "postcode" VARCHAR(10) NOT NULL,
    "street" VARCHAR(100) NOT NULL,
    "city" VARCHAR(100) NOT NULL,
    "number" VARCHAR(10) NOT NULL,
    "delivery" BOOLEAN NOT NULL,
    "lat" DECIMAL,
    "long" DECIMAL,
    "name" VARCHAR(100),

    CONSTRAINT "address_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "category" (
    "id" SERIAL NOT NULL,
    "label" VARCHAR(55) NOT NULL,
    "image_url" VARCHAR(500),
    "restaurant_id" UUID NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "position" INTEGER,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "updated_at" TIMESTAMPTZ(6),

    CONSTRAINT "category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "food" (
    "id" SERIAL NOT NULL,
    "label" VARCHAR(55) NOT NULL,
    "description" VARCHAR(250),
    "alone_price" INTEGER,
    "image_url" VARCHAR(500),
    "category_id" INTEGER,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6),
    "menu_price" INTEGER,
    "additional_price" INTEGER,
    "need_majority" BOOLEAN NOT NULL DEFAULT false,
    "position" INTEGER NOT NULL DEFAULT 0,
    "menu" BOOLEAN NOT NULL DEFAULT false,
    "restaurant_id" UUID,
    "menu_additional_price" INTEGER,
    "nb_element" INTEGER,
    "alone_process_id" INTEGER,
    "menu_process_id" INTEGER,
    "delivery" BOOLEAN NOT NULL DEFAULT false,
    "click_and_collect" BOOLEAN NOT NULL DEFAULT false,
    "on_site" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "food_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "order" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "restaurant_id" UUID NOT NULL,
    "delivery" BOOLEAN NOT NULL DEFAULT false,
    "total" INTEGER NOT NULL,
    "status" BOOLEAN,
    "delivered" BOOLEAN DEFAULT false,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6),
    "approuved" BOOLEAN,
    "ready_time" VARCHAR(5) NOT NULL,
    "comment" VARCHAR(500),
    "on_site" BOOLEAN NOT NULL DEFAULT false,
    "user_time_validation" BOOLEAN NOT NULL DEFAULT false,
    "user_cancel" BOOLEAN NOT NULL DEFAULT false,
    "click_and_collect" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "order_food" (
    "id" SERIAL NOT NULL,
    "food_id" INTEGER NOT NULL,
    "order_id" INTEGER NOT NULL,
    "ref_food_id" INTEGER,
    "step_id" INTEGER,
    "menu" BOOLEAN NOT NULL,
    "quantity" INTEGER,

    CONSTRAINT "order_food_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "process" (
    "id" SERIAL NOT NULL,
    "label" VARCHAR(50) NOT NULL,
    "restaurant_id" UUID NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6),

    CONSTRAINT "process_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "restaurant" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "password" VARCHAR(250),
    "name" VARCHAR(55) NOT NULL,
    "description" VARCHAR(500) NOT NULL,
    "address_label" VARCHAR(55),
    "address_city" VARCHAR(55),
    "address_cp" VARCHAR(55),
    "phone" VARCHAR(12) NOT NULL,
    "facebook_link" VARCHAR(250),
    "delivery" BOOLEAN NOT NULL,
    "delivery_mini_amount" INTEGER,
    "logo_url" VARCHAR(500),
    "banner_url" VARCHAR(500),
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6),
    "snapchat_link" VARCHAR(250),
    "instagram_link" VARCHAR(250),
    "is_open" BOOLEAN NOT NULL DEFAULT false,
    "click_and_collect" BOOLEAN NOT NULL DEFAULT true,
    "on_site" BOOLEAN NOT NULL DEFAULT false,
    "user_id" INTEGER NOT NULL,
    "private_mode" BOOLEAN NOT NULL DEFAULT false,
    "process_id" INTEGER,
    "address_number" VARCHAR(10),
    "address_id" INTEGER,

    CONSTRAINT "restaurant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "step" (
    "id" SERIAL NOT NULL,
    "process_id" INTEGER NOT NULL,
    "position" INTEGER NOT NULL,
    "min" INTEGER,
    "max" INTEGER,
    "depend_size" BOOLEAN NOT NULL DEFAULT false,
    "all_selected" BOOLEAN NOT NULL DEFAULT false,
    "label" VARCHAR(50) NOT NULL,
    "overwrite_price" INTEGER,
    "ref_step_id" INTEGER,

    CONSTRAINT "step_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "step_has_food" (
    "id" SERIAL NOT NULL,
    "step_id" INTEGER NOT NULL,
    "food_id" INTEGER NOT NULL,

    CONSTRAINT "step_has_food_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "subscription" (
    "id" SERIAL NOT NULL,
    "status" VARCHAR(150) NOT NULL,
    "session_stripe" VARCHAR(500) NOT NULL,
    "sub_id" VARCHAR(500),
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "stripe_customer_id" VARCHAR,
    "user_id" INTEGER NOT NULL,
    "updated_at" TIMESTAMPTZ(6),

    CONSTRAINT "subscription_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "subscription_push" (
    "id" SERIAL NOT NULL,
    "endpoint" VARCHAR(500) NOT NULL,
    "p256dh" VARCHAR(200) NOT NULL,
    "auth" VARCHAR(250) NOT NULL,
    "content_encoding" VARCHAR(250),
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6),
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "subscription_push_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "email" VARCHAR(55) NOT NULL,
    "password" VARCHAR(250),
    "lastname" VARCHAR(55),
    "firstname" VARCHAR(55),
    "phone" VARCHAR(12),
    "active_account" BOOLEAN NOT NULL DEFAULT true,
    "verified_email" BOOLEAN NOT NULL DEFAULT false,
    "siren" CHAR(9),
    "accept_terms" BOOLEAN NOT NULL DEFAULT true,
    "manual_active" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6),
    "owner" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Test" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(55) NOT NULL,

    CONSTRAINT "Test_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "fki_meal_category_restaurantId_fkey" ON "category"("restaurant_id");

-- CreateIndex
CREATE INDEX "fki_meal_categoryId_fkey" ON "food"("category_id");

-- CreateIndex
CREATE UNIQUE INDEX "restaurant_id_key" ON "restaurant"("id");

-- CreateIndex
CREATE INDEX "fki_restaurant_user_id_fk" ON "restaurant"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "subscription_session_stripe_unique" ON "subscription"("session_stripe");

-- CreateIndex
CREATE UNIQUE INDEX "subscription_sub_id_unique" ON "subscription"("sub_id");

-- CreateIndex
CREATE INDEX "fki_subscription_user_id_fk" ON "subscription"("user_id");

-- CreateIndex
CREATE INDEX "fki_subscription_push_customer_id_fk" ON "subscription_push"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "user_email_unique" ON "user"("email");

-- AddForeignKey
ALTER TABLE "address" ADD CONSTRAINT "address_userId_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "category" ADD CONSTRAINT "category_restaurant_id_fkey" FOREIGN KEY ("restaurant_id") REFERENCES "restaurant"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "food" ADD CONSTRAINT "food_alone_processId_fkey" FOREIGN KEY ("alone_process_id") REFERENCES "process"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "food" ADD CONSTRAINT "food_categoryId_fkey" FOREIGN KEY ("category_id") REFERENCES "category"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "food" ADD CONSTRAINT "food_menu_processId_fkey" FOREIGN KEY ("menu_process_id") REFERENCES "process"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "food" ADD CONSTRAINT "food_restaurantId_fk" FOREIGN KEY ("restaurant_id") REFERENCES "restaurant"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "order" ADD CONSTRAINT "order_restaurantId_fkey" FOREIGN KEY ("restaurant_id") REFERENCES "restaurant"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "order" ADD CONSTRAINT "order_userId_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "order_food" ADD CONSTRAINT "order_food_foodId_fkey" FOREIGN KEY ("food_id") REFERENCES "food"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "order_food" ADD CONSTRAINT "order_food_orderId_fkey" FOREIGN KEY ("order_id") REFERENCES "order"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "order_food" ADD CONSTRAINT "order_food_ref_foodId_fkey" FOREIGN KEY ("ref_food_id") REFERENCES "food"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "order_food" ADD CONSTRAINT "order_food_stepId_fkey" FOREIGN KEY ("step_id") REFERENCES "step"("id") ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "process" ADD CONSTRAINT "process_resaurantId_fkey" FOREIGN KEY ("restaurant_id") REFERENCES "restaurant"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "restaurant" ADD CONSTRAINT "restaurant_addressId_fkey" FOREIGN KEY ("address_id") REFERENCES "address"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "restaurant" ADD CONSTRAINT "restaurant_processId_fkey" FOREIGN KEY ("process_id") REFERENCES "process"("id") ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "restaurant" ADD CONSTRAINT "restaurant_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "step" ADD CONSTRAINT "step_processId_fkey" FOREIGN KEY ("process_id") REFERENCES "process"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "step" ADD CONSTRAINT "step_ref_stepId_fkey" FOREIGN KEY ("ref_step_id") REFERENCES "step"("id") ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "step_has_food" ADD CONSTRAINT "step_has_food_foodId_fkey" FOREIGN KEY ("food_id") REFERENCES "food"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "step_has_food" ADD CONSTRAINT "step_has_food_stepId_fkey" FOREIGN KEY ("step_id") REFERENCES "step"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "subscription" ADD CONSTRAINT "subscription_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "subscription_push" ADD CONSTRAINT "subscription_push_userId_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

